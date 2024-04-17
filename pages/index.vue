<script setup lang="ts">

definePageMeta({
  middleware: 'auth',
  layout: 'custom-layout'
})

</script>

<template>
  <div class="maindiv w-full h-full max-h-full">
     <section class="w-full h-96 rounded-lg bg-blue-600 mb-10">

     </section>

     <section class="w-full h-96 mb-10">
      <h1 class="font-semibold">Clinicas proximas de você</h1>
     </section>
     <section class="w-full h-96 mb-10">
      <h1 class="font-semibold">Hospitais especializados</h1>
     </section>
  </div>
</template>

<style>

</style>