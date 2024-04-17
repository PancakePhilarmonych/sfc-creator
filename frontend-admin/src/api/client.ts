const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

interface ITemplateData {
  template: string;
  styles: string;
}

export async function saveTemplateData(data: ITemplateData): Promise<boolean> {
  const result = await fetch(`${apiUrl}/save-template-data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      template: data.template,
      styles: data.styles,
    }),
  })

  if(!result.ok) {
    const error = await result.json();
    console.error(error);
  }

  return result.ok;
}

export async function getTemplateData(): Promise<ITemplateData> {
  const result = await fetch(`${apiUrl}/get-template-data`);

  if(!result.ok) {
    const error = await result.json();
    console.error(error);
    return {
      template: '',
      styles: '',
    }
  }

  return await result.json();
}