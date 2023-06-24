<template>
    <v-container grid-list-xs>        
        <v-sheet max-width="300" max-height="300" class="mx-auto">
   

            <center><h2>รายการเช็คสภาพรถ</h2></center>
            <v-container > 
                <v-row no-gutters>
                    <v-col>
                        <v-sheet class="pa-2 ma-2">
                        <v-checkbox label="น้ำมันเครื่อง"> </v-checkbox> 
                        </v-sheet>
                    </v-col>

                    <v-col cols="6">
                        <v-sheet class="pa-2 ma-2">
                        <v-checkbox label="น้ำมันเบรค"></v-checkbox> 
                        </v-sheet>
                    </v-col>
                </v-row>

                <v-row no-gutters>
                    <v-col>
                        <v-sheet class="pa-2 ma-2">
                        <v-checkbox label="หม้อน้ำ"></v-checkbox>
                        </v-sheet>
                    </v-col>

                    <v-col cols="6">
                        <v-sheet class="pa-2 ma-2">
                        <v-checkbox label="แบตเตอร์รี่"></v-checkbox>  
                        </v-sheet>
                    </v-col>
                </v-row>
                    <v-row no-gutters>
                    <v-col>
                        <v-sheet class="pa-2 ma-2">
                        <v-checkbox label="ไส้กรองอากาศ"></v-checkbox>
                        </v-sheet>
                    </v-col>

                    <v-col cols="6">
                        <v-sheet class="pa-2 ma-2">
                        <v-checkbox label="สายพาน"></v-checkbox>
                        </v-sheet>
                    </v-col>
                </v-row>
                                    <v-row no-gutters>
                    <v-col>
                        <v-sheet class="pa-2 ma-2">
                        <v-checkbox label="ยางรถ"></v-checkbox>
                        </v-sheet>
                    </v-col>

                    <v-col cols="8">
                        <v-sheet class="pa-2 ma-2">
                        <v-checkbox label="ระบบไฟ/ไฟหน้า ไฟเลี้ยว ไฟเบรค"></v-checkbox>
                        </v-sheet>
                    </v-col>
                </v-row>
                <!-- ตารางเก่า(โชว์บรรทัดละ1 สำหรับมือถือ) -->
                <!-- <v-col >
                            <v-sheet class="pa-2 ma-3">
                                    <v-checkbox label="น้ำมันเครื่อง"> </v-checkbox> 
                                    <v-checkbox label="น้ำมันเบรค"></v-checkbox> 
                                    <v-checkbox label="หม้อน้ำ"></v-checkbox>
                                    <v-checkbox label="แบตเตอร์รี่"></v-checkbox>            
                                    <v-checkbox label="ไส้กรองอากาศ"></v-checkbox>
                                    <v-checkbox label="สายพาน"></v-checkbox>
                                    <v-checkbox label="ยางรถ"></v-checkbox>
                                    <v-checkbox label="ระบบไฟ/ไฟหน้า ไฟเลี้ยว ไฟเบรค"></v-checkbox>
                            </v-sheet>
                </v-col> -->

            </v-container>


            <v-row > 
                  <v-col no-gutters>  


                  
                  
                  
                   </v-col>
            
                         

                    
            </v-row>
            

            <v-autocomplete
                v-model="car_id"
                label="เลือกทะเบียนรถ"
                prepend-icon="mdi-car"
                :items="cardata"
            ></v-autocomplete>

            <v-text-field
                v-model="note"
                label="หมายเหตุ"
                prepend-icon="mdi-alert-circle"
            ></v-text-field>

            <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="อัพโหลดรูปรถที่เช็ค"
            ></v-file-input>
        
                            
            <v-btn
                color="success"
                class="mt-4"
                block
                @click="updatemainten"
            >
            บันทึกบิล
            </v-btn>
            
        </v-sheet>
    </v-container>
</template>

<script setup lang="ts">

    import { ref,reactive } from 'vue'
    import axios from 'axios'
        
    import { useEmployeeStore } from '@/store/employee'
    const  useEmployee = useEmployeeStore()     


    let cardata = useEmployee.car_list



    let user_check  = ref(0)
    let car_id  = useEmployee.default_car
    let car_id_mapping  = ref(0)
    let oil_check  = ref(0)
    let break_check  = ref(0)
    let boiler_check  = ref(0)
    let batt_check  = ref(0)
    let filter_check  = ref(0)
    let belt_check  = ref(0)
    let tire_check  = ref(0)
    let light_check  = ref(0)
    let note  = ref()
    let upload_img  = ref(0)
    let rec_time_stamp  = ref(0)


    
    const updatemainten = () => {
        const url = 'http://110.49.110.213:90/ws18/post_mainten.php';

            const options = {
            params: {
                maintence: {"Car_id":'บพ-550',"Mileage":12345,"Oil_Total":4567,"Oil_Price":9876}
            }
            };

            axios.get(url, options).then((response) => {
            // handle success
            console.log(response);
            })
            .catch((error) => {
            // handle errors
            });

                             }


</script>

<style scoped>

</style>