import { defineStore } from 'pinia'

export const useEmployee = defineStore('employee', {
        state: () =>  {
            return{
                employee_name : '' 
            }
                         }, 
        getters: {
             get_employee_name : (state) => state.employee_name,
             
         },
         actions: {
             set_employee_name (inputemployee:any) {
                  this.employee_name = inputemployee
             }   

         },
})