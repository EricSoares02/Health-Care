<script setup lang="ts">
defineProps<{
  title: string; //ja
  placeHolder: string; //ja
  type: string; //ja
  icon?: string;
}>();
</script>

<template>
  <div class="w-4/6">
    <label :for="$props.title" class="text-xs absolute -translate-y-2 translate-x-5 font-semibold">{{ $props.title }}</label>
    <input
      :type="$props.type"
      :name="$props.title"
      :id="$props.title"
      :placeholder="$props.placeHolder"
      class=" text-sm w-full h-10 flex rounded-lg outline-none p-4 bg-gray-300 placeholder-gray-600 duration-200 focus:border focus:border-blue-500"
    />
  </div>
</template>

<!--   <label :for="$props.title" class="text-xs">{{ $props.title }}</label>
  <input :type="$props.type" :name="$props.title" :id="$props.title" :placeholder="$props.placeHolder" class="bg-gray-300 text-sm w-4/5 h-10 flex rounded-lg outline-none p-4 placeholder-gray-600"/> -->
