<script setup lang="ts">

definePageMeta({
  middleware: 'auth',
  layout: 'custom-layout'
})

</script>

<template>
  <div class="w-full h-auto">
     <section class="w-full h-96 rounded-lg bg-blue-600 mb-10">

     </section>

     <section>
      <h1 class="font-semibold">Clinicas proximas de você</h1>
     </section>
  </div>
</template>