<script setup>
import DefaultTheme from 'vitepress/theme'
import ReadingProgress from '../components/ReadingProgress.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <ReadingProgress />
    </template>
  </Layout>
</template>

<style>
/* Vous pouvez ajouter des styles globaux ici si nécessaire */
</style>