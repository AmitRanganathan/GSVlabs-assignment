<template>
    <v-toolbar fixed class="light-blue" dark>
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo({name: 'root'})">
                Poem Generator
            </span>
        </v-toolbar-title>

        <!-- TODO: Implement -->
        <!-- <v-toolbar-items>
            <v-btn flat dark> 
                View All Poems
            </v-btn>
        </v-toolbar-items> -->

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn v-if="!$store.state.isLoggedIn"
                flat dark
                @click="navigateTo({name: 'login'})"> 
                Login 
            </v-btn>
        </v-toolbar-items>

        <v-toolbar-items>
            <v-btn v-if="!$store.state.isLoggedIn"
                flat dark
                @click="navigateTo({name: 'register'})"> 
                Sign Up 
            </v-btn>
        </v-toolbar-items>
       

    </v-toolbar>    
</template>

<script>
export default {
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color: greenyellow
}
</style>
 