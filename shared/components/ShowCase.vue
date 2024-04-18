<template>
  <div class="show-case-wrapper" :style="showCaseStyles">
    <div class="show-case">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    height: {
      type: String,
      default: '500px'
    },
    width: {
      type: String,
      default: 'auto'
    }
  },
  setup(props) {
    const showCaseStyles = computed(() => {
      return {
        '--show-case-height': props.height,
        '--show-case-width': props.width
      }
    });

    return { showCaseStyles };
  }
}
</script>

<style>
.show-case-wrapper {
  padding: 1rem;
  border: 2px dashed #254e3b;
  border-radius: 5px;
  display: flex;
  overflow-y: auto;
  overflow-x: auto;
  justify-content: center;
  align-items: center;
}

.show-case {
  height: var(--show-case-height);
  width: var(--show-case-width);
}
</style>