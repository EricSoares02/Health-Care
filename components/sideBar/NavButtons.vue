<script setup lang="ts">

defineProps<{
    props: {
        title: string,
        path: string,
        twStyle: string
    }
}>();

</script>


<template>
  <li :class="$props.props.twStyle"
  >
    <a :href="$props.props.path" class="w-full h-full flex gap-3 items-center">
        <slot></slot>
    {{$props.props.title}}</a>
  </li>
</template>
