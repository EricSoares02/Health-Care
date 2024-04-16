<script setup lang="ts">


const menu = [{
    path: '/',
    icon : '',
    title: 'Home'
},
{
    path: '/servicos',
    icon : '',
    title: 'Services'
},
{
    path: '/clinicas',
    icon : '',
    title: 'Clinics'
},
{
    path: '/medicos',
    icon : '',
    title: 'Doctors'
},
{
    path: '/consultations',
    icon : '',
    title: 'Consultations'
},
{
    path: '/account',
    icon : '',
    title: 'Account'
},
{
    path: '/medspace',
    icon : '',
    title: 'MedSpace'
},
{
    path: '/logout',
    icon : '',
    title: 'Logout'
},
];


const route = useRoute();

function NavButtonsIsActive(currentUrl: string, buttonPath: string) {
  const defaultStyle =
    "w-11/12 h-10 flex items-center gap-4 font-semibold pl-4 rounded-lg";

  if (currentUrl === buttonPath) {
    return `${defaultStyle} text-blue-500 bg-gray-300`;
  }

  return defaultStyle
}

const currentUrl = route.fullPath.split("/")[1];


</script>


<template>

<nav class="w-full h-1/3 max-h-80">
    <ul class="w-full h-full flex flex-col items-center text-[14px]">
        <li v-for="nav in menu" :class="NavButtonsIsActive(currentUrl, nav.path.slice(1))">
            <a :href="nav.path" class="w-full h-full flex gap-4 items-center">{{ nav.title }}</a>
        </li>
    </ul>
</nav>

</template>