<template>
    <v-layout row>
        <v-flex>
            <panel title="Register">
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
                    autocomplete="new-password"
                ></v-text-field>
                <br>
                <div class="error" v-html="error" /> 
                <br>
                <v-btn 
                    dark
                    class="light-blue"
                    @click="register">
                Reigster
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
            async register () {
                try{
                    const response = await AuthenticationService.register({
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
.error {
    color: red;
}
</style>

