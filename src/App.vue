<template>
  <router-view />
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import axios from 'axios'


    // import { useEmployee } from "./store/employee"

    let uri = window.location.search.substring(); 
    let params = new URLSearchParams(uri);
    let employee_id = ref(params.get("employee_id"));

    // const  useEmployee = useEmployee()

    // axios.get(import.meta.env.VITE_WS+'get_car_user_list.php',{
    //                     params: {
    //                         employee_id:employee_id.value
    //                     }
    //                 }).then(response => {
    //         let result = JSON.parse(JSON.stringify(response.data))
    //         useEmployee.set_employee_name(result[0].employee_name)
    //         alert (result[0].employee_name)
    //         });
       

</script> 

<style scoped>

</style>