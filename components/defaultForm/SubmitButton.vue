<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <div class="w-4/6">
   <button type="submit" class="w-full h-10 bg-blue-500 flex items-center justify-center font-semibold text-base text-white-100 rounded-lg hover:bg-blue-600 duration-700">{{$props.title}}</button>
  </div>
</template>

<!--   <label :for="$props.title" class="text-xs">{{ $props.title }}</label>
  <input :type="$props.type" :name="$props.title" :id="$props.title" :placeholder="$props.placeHolder" class="bg-gray-300 text-sm w-4/5 h-10 flex rounded-lg outline-none p-4 placeholder-gray-600"/> -->
