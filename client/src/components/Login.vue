<template>
    <v-layout row>
        <v-flex>
            <panel title="Login">
                <v-text-field
                    name="email"
                    v-model="email"
                    label="Email"
                ></v-text-field>
                <br>
                <v-text-field
                    name="password"
                    v-model="password"
                    type="password"
                    label="Password"
                ></v-text-field>
                <br>
                <div class="danger-alert" v-html="error" /> 
                <br>
                <v-btn 
                    dark
                    class="light-blue"
                    @click="login">
                Login
                </v-btn>
            </panel>    
        </v-flex>
    </v-layout>
</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'
    import Panel from '@/components/Panel'
    export default {
        data () {
            return {
                email: '',
                password: '',
                error: null
            }
        },
        methods: {
            async login () {
                 try{
                    const response = await AuthenticationService.login({
                        email: this.email,
                        password: this.password
                    })
                    this.$store.dispatch('setToken', response.data.token)
                    this.$store.dispatch('setUser', response.data.user)
                } catch (error) {
                    this.error = error.response.data.error
                } 
                
            }
        },
        components: {
            Panel
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

