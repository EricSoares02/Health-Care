<script setup lang="ts">

defineProps<{
    twStyle: string,
    camps?: {
        title: string,
        placeHolder: string,
        type: string,
        icon: string
    }[],   
}>()


</script>
<template>
    <form action="" method="post" :class="$props.twStyle">
        <InputCase v-for="input in camps" :title="input.title" :place-holder="input.placeHolder" :type="input.type"/>
        <SubmitButton title="Login"/>
    </form>
</template>