<template>
  <div class="admin-panel">
    <TemplateEditor @updateComponent="updateSFC"/>
    <ShowCase>
      <SingleFileComponent :key="updateKey"/>
    </ShowCase>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TemplateEditor from './TemplateEditor.vue';
import SingleFileComponent from '@shared/components/SingleFileComponent/SingleFileComponent.vue'
import ShowCase from '@shared/components/ShowCase.vue';

function updateSFC() {
  updateKey.value++
}
const updateKey = ref(0);

</script>

<style scoped>
.admin-panel {
  display: grid;
  grid-template-columns: 30% 55%;
  gap: 2rem;
}

.editor-input {
  width: 100%;
  height: 200px;
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

