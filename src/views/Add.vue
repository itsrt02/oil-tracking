<template>
    <v-container grid-list-xs>        
        <v-sheet max-width="300" class="mx-auto">
   
            <v-autocomplete
                v-model="jsondata.car_id"
                label="เลือกทะเบียนรถ"
                prepend-icon="mdi-car"
                :items="test11"
            ></v-autocomplete>

            <v-text-field      
            v-model.number="jsondata.Mileage"
            :rules="[rules.numbered]"
            label="เลขไมล์"
            prepend-icon="mdi-car-speed-limiter"
            ></v-text-field>
                        
            <v-text-field 
                v-model="jsondata.Oil_Total"
                :rules="[rules.numberonlyreg]"
                label="จำนวนลิตร"
                prepend-icon="mdi-oil"
            ></v-text-field>

            <v-text-field
                v-model="jsondata.Oil_Price"
                :rules="[rules.numberonly]"
                label="จำนวนเงิน"
                prepend-icon="mdi-cash"
            ></v-text-field>

            <v-file-input
                 v-model="jsondata.UpLoad_OilBill"
                :rules="rules1"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="แนบรูปบิลน้ำมัน"
            ></v-file-input>

             <!-- <v-file-input
                :rules="rules1"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="แนบรูปตู้ปั๊มหัวจ่าย"
            ></v-file-input> -->


                <v-row>
                    <input @change="onFileSelected"  
                    ref="fileupload" 
                    type="file" 
                    name="" 
                    id="" 
                    accept="image/*"
                    capture
                    />
                </v-row>  

            <v-btn
                color="success"
                class="mt-4"
                block
                @click="updateoil"
            >
            บันทึกบิล
            </v-btn>
            
        </v-sheet>
    </v-container>
</template>

<script setup lang="ts">
    
    import { ref,reactive } from 'vue'
    import axios from 'axios'
    let test11 = ['โฟล์คลิฟท์ SRT', 'บพ-550', '81-0402 สฎ', '81-0404 สฎ', '81-5096 สฎ','บพ-548 สฎ', 'บม-1389 สฎ']

    let jsondata : any = reactive<object>({
        Car_id: '',
        Mileage :  0 ,
        Oil_Total : 0.00,
        Oil_Price : 0.00,
        })


    let Mileage = ref(0)
    let Oil_Total = ref(0)
    let Oil_Price = ref(0)
    let car_id  = ref(test11[13])
    let UpLoad_OilBill =ref(0)

     let rules = {
        required: v  => !!v || 'Field is required',
        numberonlyreg : Oil_Total => /[^0-9]/.test(Oil_Total)||'This field only accept numbers',
        numbered : Mileage => Number.isInteger(Number(Mileage)) || 'ต้องกรอกข้อมูลเป็นตัวเลขเท่านั้น !!', 
        numberonly : Oil_Price  => !isNaN(parseFloat(Oil_Price)) && Oil_Price >= 0 && Oil_Price <= 5000 || 'ค่าน้ำมันต้องไม่เกิน5000',             
      }
    
    const updateoil = () => {
        const url = 'http://110.49.110.213:90/ws18/post_oil.php';

            const options = {
            params: {
                oilbill:"["+JSON.stringify(jsondata)+"]"
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
    // UPLOAD SIZE FIX
//     export default {
//     data: () => ({
//       rules1: [
//         UpLoad_OilBill => {
//           return !UpLoad_OilBill || !UpLoad_OilBill.length || UpLoad_OilBill[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
//         },
//       ],
//     }),
//   }                     


</script>

<style scoped>

</style>