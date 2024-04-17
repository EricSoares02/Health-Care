<script setup lang="ts">


const menubar = ref(false);

function ToogleMenu(){
  menubar.value = !menubar.value;
}

</script>

<template>
  
<div class="w-screnn h-screen">

  <DefaultHeader @ToogleMenu="ToogleMenu"/>
  <main class="w-full h-auto min-h-full relative top-20 flex flex-col bg-gray-300">
    <aside v-if="menubar"
    class="w-72 h-full fixed left-0 bg-white-100 pt-2 z-40
    max-md:w-full max-md:h-full 
    ">
      <SideBar/>
    </aside>
   <slot></slot>
  </main>

</div>
</template>