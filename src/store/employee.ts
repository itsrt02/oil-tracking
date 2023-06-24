import { defineStore } from 'pinia'


export const useEmployeeStore = defineStore('employee', {
    state: () =>  (
        {
            employee_name : '' ,
            default_car : '',
            car_use : [],
            car_list : [],
        }
    ), 

    getters: {
         get_employee_name : (state : any) => state.employee_name,
         
     },
     actions: {
         set_employee_name  (inputemployee:any)  {
            this.employee_name = inputemployee
         },
         set_car_use ( inputcar : any ){
            this.car_use = inputcar

            let i = 0;
            while (i < this.car_use.length) {
                this.car_list.push(this.car_use[i].car_id )
                if ( this.car_use[i].default_user.trim() === 'Y' ){  
                    this.default_car = this.car_use[i].car_id
                }
                i++;
            }
         },
     },
})