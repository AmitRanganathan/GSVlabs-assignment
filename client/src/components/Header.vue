<template>
    <v-toolbar fixed class="light-blue" dark>
        <v-toolbar-title class="mr-4">
            <span v-if="!$store.state.isLoggedIn"
            class="home" @click="navigateTo({name: 'root'})">
                Poem Generator
            </span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn 
                flat dark
                @click="navigateTo({name: 'poems'})"> 
                View Poems 
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn v-if="!$store.state.isLoggedIn"
                flat dark
                @click="navigateTo({name: 'login'})"> 
                Login 
            </v-btn>
        
            <v-btn v-if="!$store.state.isLoggedIn"
                flat dark
                @click="navigateTo({name: 'register'})"> 
                Sign Up 
            </v-btn>

            <v-btn v-if="$store.state.isLoggedIn"
                flat dark
                @click="logout"> 
                Log out 
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>    
</template>

<script>
export default {
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        },
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'root'
            })
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
 