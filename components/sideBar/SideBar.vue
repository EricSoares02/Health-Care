<script setup lang="ts">

const route = useRoute();
const currentUrl = route.fullPath.split("/")[1];
const size = "20px";


function NavButtonsIsActive(currentUrl: string, buttonPath: string) {
  const defaultStyle = "w-11/12 h-10 flex items-center gap-4 font-semibold pl-4 rounded-lg";

  if (currentUrl === buttonPath) {
    return `${defaultStyle} text-blue-500 bg-gray-300`;
  }

  return defaultStyle
}


const emit = defineEmits(['ToogleMenu'])

</script>


<template>

<nav class="w-full h-full">
    <div class="hidden w-full h-10 items-center justify-end pr-4 max-lg:flex">
       <button @click="$emit('ToogleMenu', 'clicked')">X</button>
    </div>
    <ul class="w-full h-full flex flex-col items-center text-[14px] gap-1">
            <NavButtons :props="{path: '/', title: 'Home', twStyle: NavButtonsIsActive(currentUrl, '/'.slice(1))}">
                <HomeIcon :color="buttonsColor(currentUrl,'/'.slice(1))" :size="size"/>
            </NavButtons>

            <NavButtons :props="{path: '/servicos', title: 'Services', twStyle: NavButtonsIsActive(currentUrl, '/servicos'.slice(1))}">
                
            </NavButtons>

            <NavButtons :props="{path: '/clinicas', title: 'Clinics', twStyle: NavButtonsIsActive(currentUrl, '/clinicas'.slice(1))}">
                <StethoscopeIcon :color="buttonsColor(currentUrl,'/clinicas'.slice(1))" :size="size"/>
            </NavButtons>

            <NavButtons :props="{path: '/medicos', title: 'Doctors', twStyle: NavButtonsIsActive(currentUrl, '/medicos'.slice(1))}">
                <DoctorIcon :color="buttonsColor(currentUrl,'/medicos'.slice(1))" :size="size"/>
            </NavButtons>

            <NavButtons :props="{path: '/consultas', title: 'Consultations', twStyle: NavButtonsIsActive(currentUrl, '/consultas'.slice(1))}">
                <PhoneIcon :color="buttonsColor(currentUrl,'/consultas'.slice(1))" size="18px"/>
            </NavButtons>

            <NavButtons :props="{path: '/conta', title: 'Account', twStyle: NavButtonsIsActive(currentUrl, '/conta'.slice(1))}">
                <UserIcon :color="buttonsColor(currentUrl,'/conta'.slice(1))" :size="size"/>
            </NavButtons>

            <NavButtons :props="{path: '/medspace', title: 'MedSpace', twStyle: NavButtonsIsActive(currentUrl, '/medspace'.slice(1))}">
                
            </NavButtons>

            <NavButtons :props="{path: '/logout', title: 'Logout', twStyle: NavButtonsIsActive(currentUrl, '/logout'.slice(1))}">
                <LogoutIcon :color="buttonsColor(currentUrl,'/logout'.slice(1))" :size="size"/>
            </NavButtons>
    </ul>
</nav>

</template>