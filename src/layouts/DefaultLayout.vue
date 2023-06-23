<template>

    <v-app id="inspire">
        
        <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = true"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="ปริญญา เพชรรัตน์" 
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <router-link to="/">
                <v-list-item prepend-icon="mdi-home-city" title="หน้าหลัก" value="AddBill"></v-list-item>
            </router-link>    
            <router-link to="/add">
                <v-list-item prepend-icon="mdi-motorbike" title="เพิ่มบิล" value="AddBill"></v-list-item>
            </router-link>
            <router-link to="/maintence">
                <v-list-item prepend-icon="mdi-motorbike" title="เช็ครถ" value="maintence"></v-list-item>
            </router-link>
          <!-- <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item> -->
        </v-list>
      </v-navigation-drawer>

        <v-main>
            <router-view />
        </v-main>

    </v-app>
</template>

<script setup lang="ts">
    
    import { ref } from 'vue';
    const drawer =  ref(true)
    const rail = ref(true)

</script>

<style scoped>

</style>