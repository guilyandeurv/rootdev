<template>
  <div class="file-tree" :class="{ 'dark': isDark }">
    <TreeItem
      v-for="(item, index) in parsedTree"
      :key="index"
      :item="item"
      :is-last="index === parsedTree.length - 1"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import TreeItem from './TreeItem.vue'

export default {
  name: 'FileTree',
  components: {
    TreeItem
  },
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { isDark } = useData()

    const parsedTree = computed(() => {
      return parseTree(props.content)
    })

    function parseTree(content) {
      const lines = content.trim().split('\n')
      const tree = []
      const stack = [{ children: tree }]

      lines.forEach(line => {
        const indent = line.search(/\S/)
        const name = line.trim()
        
        while (indent < stack.length - 1) {
          stack.pop()
        }

        const newNode = { name, children: [] }
        stack[stack.length - 1].children.push(newNode)

        if (name.endsWith('/')) {
          stack.push(newNode)
        }
      })

      return tree
    }

    return {
      isDark,
      parsedTree
    }
  }
}
</script>

<style scoped>
.file-tree {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1.5em;
  background-color: #f8f8f8;
  border-radius: 8px;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.file-tree.dark {
  background-color: var(--vp-c-default-soft);
  border: 1px solid rgba(144, 164, 183, 1);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.05);
}
</style>