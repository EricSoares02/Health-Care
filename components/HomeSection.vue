<script setup lang="ts">

defineProps<{
    title?: string
}>();

</script>

<template>

    <section class="w-full max-w-screen-2xl h-[524px] mb-10 px-1">
      <div class="w-full h-12 flex items-center">
          <h1 class="w-48 h-full flex items-center justify-center font-semibold text-lg text-nowrap pl-4">{{ title }}</h1>
      </div>
      <slot></slot>
    </section>

</template>