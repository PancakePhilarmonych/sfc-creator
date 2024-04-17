<template>
  <div class="tamplate-editor">
    <h1>Template Editor</h1>
    <textarea 
      v-model="template"
      @keyup.ctrl.enter="save"
      placeholder="vue.js code..."
      class="editor-input vue" />

    <h1>Styles Editor</h1>
    <textarea 
      v-model="styles" 
      @keyup.ctrl.enter="save" 
      placeholder="css code..." 
      class="editor-input css" />

    <div class="action">
      <button @click="save">Save</button>
      <span> hint: use ctrl + enter to save </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { saveTemplateData, getTemplateData } from '@/api/client.ts';
const emit = defineEmits(['updateComponent'])

const template = ref('');
const styles = ref('');

async function save() {
  const templateData = template.value;
  const stylesData = styles.value;

  try {
    await saveTemplateData({template: templateData, styles: stylesData})

    emit('updateComponent')
  } catch (error) {
    console.error('Error:', error);
  }
}

onMounted(async () => {
  const templateData = await getTemplateData();
  template.value = templateData.template;
  styles.value = templateData.styles;
});

</script>

<style scoped>
.template-editor {
  width: 100%;
}

.editor-input {
  width: 100%;
  height: 250px;
  margin-top: 10px;
}

textarea {
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #2b2b2b;
  border-radius: 5px;
  resize: none;
  background: #272727;
  font-weight: bold;
}

textarea:focus, input:focus{
  outline: 3px solid #474747;
}

textarea.vue {
  color: #55efc4;
}

textarea.css {
  color: #53a0ec;
}

.action {
  display: flex;
  margin-top: 10px;
}

.action button {
  margin-right: 10px;
}
</style>

