<template>
  <div 
    class="tree-item" 
    :class="{ 'is-folder': isFolder, 'is-open': isOpen }"
  >
    <div class="tree-item-header">
      <span 
        class="tree-item-icon" 
        @click="toggleFolder" 
        v-if="isFolder"
      >
        {{ isOpen ? '📂' : '📁' }}
      </span>
      <span v-else class="tree-item-icon">📄</span>
      <span class="tree-item-name">{{ item.name }}</span>
      <span class="tree-item-comment" v-if="item.comment">// {{ item.comment }}</span>
    </div>
    <div class="tree-item-children" v-if="isFolder && isOpen">
      <TreeItem
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :is-last="index === item.children.length - 1"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'TreeItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const isOpen = ref(true)

    const isFolder = computed(() => {
      return props.item.children && props.item.children.length > 0
    })

    function toggleFolder() {
      if (isFolder.value) {
        isOpen.value = !isOpen.value
      }
    }

    return {
      isOpen,
      isFolder,
      toggleFolder
    }
  }
}
</script>

<style scoped>
.tree-item {
  position: relative;
  padding-left: 1.5em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
}

.tree-item-header {
  display: flex;
  align-items: center;
}

.tree-item::before,
.tree-item::after {
  content: '';
  position: absolute;
  left: 0;
}

.tree-item::before {
  top: 0;
  bottom: 0;
  width: 1px;
  border-left: 1px solid currentColor;
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: currentColor;
}

.tree-item:last-child::before {
  height: 0.7em;
}

.tree-item:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: -0.7em;
  width: 1px;
  border-left: 1px solid currentColor;
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: currentColor;
}

.tree-item-icon {
  cursor: pointer;
  margin-right: 0.5em;
  font-size: 1.1em;
}

.tree-item-name {
  cursor: default;
}

.is-folder > .tree-item-name {
  font-weight: 600;
}

.tree-item-children {
  padding-left: 1em;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
}

.is-folder:not(.is-open) + .tree-item-children {
  max-height: 0;
  opacity: 0;
}

.is-folder.is-open + .tree-item-children {
  max-height: 1000px;
  opacity: 1;
}

.tree-item-comment {
  color: #8a8a8a;
  font-size: 0.9em;
  margin-left: 0.5em;
}

</style>