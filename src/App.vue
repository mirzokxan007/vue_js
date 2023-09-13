<template>
    <div class="app">
        <div class="component">
           <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Register from '@/pages/Registe.vue'
    export default {
        components:{
            Register,
        }
    }
</script>

<style></style>