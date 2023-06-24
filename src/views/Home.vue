<template>
    <div class="pa-md-8">
            <h1>{{  useEmployee.get_employee_name }}</h1>      
      <h3>{{  useEmployee.car_list  }}</h3>
      <h3> default => {{ useEmployee.default_car }}</h3>
      
      <h1>Home</h1>
      <h1>ภาษาไทย</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa fugit, ullam consequuntur quidem totam iste, eaque nostrum maiores harum labore inventore impedit dolor ex nemo quibusdam illo architecto ipsum.</p>
          
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :model-value="value"
        color="teal"
      >
        {{ value }}
      </v-progress-circular>
      
      <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
    
    </div>
  </template>
  

 <script setup lang="ts">
    import { useEmployeeStore } from '@/store/employee'
    const  useEmployee = useEmployeeStore()

   

 </script>
  
  <style scoped>
  .v-progress-circular {
  margin: 1rem;
}
  </style>