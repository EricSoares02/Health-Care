import { isLoged } from "~/utils/authetication"


export default defineNuxtRouteMiddleware(()=>{

 
    if (isLoged()===false) {
        return navigateTo('/login')
    }

});

