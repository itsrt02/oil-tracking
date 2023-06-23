<template>
    <div class="pa-md-8">
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

import { onMounted , ref} from 'vue'

    let interval = ref<{}>({})
    let value = ref(0)

    let desserts = ref([
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          
        ])

    // clearInterval(interval)

    // onMounted :{

    //   interval = setInterval(() => {
    //     if (value.value === 100) {
    //       return (value.value = 0)
    //     }

    //     if ( value.value == 0 ){

    //       desserts.value = []

    //     }

    //     value.value += 10

    //     if ( value.value == 50 ){

    //       desserts.value = [
    //       {
    //         name: 'Cupcake',
    //         calories: 305,
    //       },
    //       {
    //         name: 'Gingerbread',
    //         calories: 356,
    //       },
    //       {
    //         name: 'Jelly bean',
    //         calories: 375,
    //       },
    //       {
    //         name: 'Lollipop',
    //         calories: 392,
    //       },
    //       {
    //         name: 'Honeycomb',
    //         calories: 408,
    //       },
    //       {
    //         name: 'Donut',
    //         calories: 452,
    //       },
    //       {
    //         name: 'KitKat',
    //         calories: 518,
    //       },
    //     ]

    //     }

    //   }, 1000)

    // }


 </script>
  
  <style scoped>
  .v-progress-circular {
  margin: 1rem;
}
  </style>