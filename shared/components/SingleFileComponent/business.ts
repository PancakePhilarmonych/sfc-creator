import { onUnmounted } from 'vue';
import { defaultStyles, defaultTemplate } from './defaultTemplate';

export interface IBindingData {
  title: string;
  description: string;
  image: string;
}

export const defaultBindingData: IBindingData = {
  title: 'Title',
  description: 'Description',
  image: 'https://via.placeholder.com/200',
};

export async function getBindingData(): Promise<IBindingData> {
  const result = await fetch('http://localhost:3000/get-binding-data');

  if(!result.ok) {
    return defaultBindingData;
  }
  
  const data = await result.json();

  return {
    title: data.title,
    description: data.description,
    image: data.image,
  };
}

function generateUniqueClassname(): string {
  return `scoped-${Math.random().toString(36).substr(2, 9)}`;
}

function injectStyles(styles: string, uniqueClass: string): () => void {
  if(!styles) return () => { };
  
  const scopedStyles = styles.replace(/(?<=\s|^|,)(\w+)(?=.*?{)/g, `.${uniqueClass} $1`);
  const styleTag = document.createElement('style');
  styleTag.textContent = scopedStyles;
  document.head.appendChild(styleTag);

  return () => document.head.removeChild(styleTag);
}

function createScopedTemplate(template: string, uniqueClass: string): string {
  return `<div class="${uniqueClass}">${template}</div>`;
}

export function createDynamicComponent(template: string, styles: string, props: IBindingData) {
  const uniqueClass = generateUniqueClassname();
  const removeStyle = injectStyles(styles, uniqueClass);
  const scopedTemplate = createScopedTemplate(template, uniqueClass);

  return {
    template: scopedTemplate,
    setup: () => {
      onUnmounted(removeStyle);
      return { ...props };
    },
  };
}

export async function componentLoader() {
  const bindingData = await getBindingData();

  try {
    const result = await fetch('http://localhost:3000/get-template-data');
    const data = result.ok ? await result.json() : null;
    const isEmptyTemplate = !data || !data.template;
    if (!isEmptyTemplate) {
      return createDynamicComponent(data.template, data.styles, bindingData);
    }
  } catch (error) {
    console.error("Error fetching template:", error);
  } 
    
  return createDynamicComponent(defaultTemplate, defaultStyles, bindingData);
}