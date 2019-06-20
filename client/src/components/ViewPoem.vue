<template>
    
    <panel title=Poem>
        <div>
            <v-layout>
                <v-flex>
                    <div class="poem-title">
                        {{poem.title}} - {{poem.author}} 
                    </div>
                    <br>

                    <div class ="poem-text">
                        from {{poem.verb1.toLowerCase()}} {{poem.prep1.toLowerCase()}} {{poem.adj1.toLowerCase()}} {{poem.noun1.toLowerCase()}} 
                        {{poem.prep2.toLowerCase()}} {{poem.verb2.toLowerCase()}} {{poem.prep3.toLowerCase()}} {{poem.adj2}} San Mateo
                        <br>
                        all {{poem.author.charAt(0).toUpperCase() + poem.author.slice(1)}} could think about was how they got a {{poem.adj3.toLowerCase()}} patio.
                        <br>
                        {{poem.adverb1.toLowerCase()}} {{poem.verb3.toLowerCase()}} his {{poem.noun2.toLowerCase()}} in the {{poem.noun3.toLowerCase()}} 
                        and {{poem.adverb2.toLowerCase()}} staring at a bird.
                        <br>
                        all {{poem.author.charAt(0).toUpperCase() + poem.author.slice(1)}} was {{poem.adverb3.toLowerCase()}} thinking bout was how they is such a nerd.
                        <br>
                    </div>
                    <br>
                 
                    <div>
                        <v-btn v-if="isLoggedIn"
                            dark
                            class="light-blue"
                            @click="navigateTo({
                                name: 'poems-edit', 
                                params: {
                                    poemId: poem.id
                                }
                            })">
                            Edit 
                        </v-btn>

                        <v-btn v-if="isLoggedIn"
                            dark
                            class="light-blue"
                            @click="deletePoem(poem.id)">
                            Delete 
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
    import PoemsService from '@/services/PoemsService'
    import Panel from '@/components/Panel'
    import {mapState} from 'vuex'
    export default {
        data  () {
            return {
                poem: null
            }
        },
        computed: {
            ...mapState([
            'isLoggedIn',
            ])
        },
        async mounted () {
            const poemId = this.$store.state.route.params.poemId
            this.poem = (await PoemsService.show(poemId)).data
           
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            },
            async deletePoem (poemId) {
                try{
                    await PoemsService.delete(poemId)
                    this.poem = null
                    this.$router.push('/poems')
                } catch (err) {
                    console.log(err)
                }
            }
        },
        components: {
            Panel
        }
    }
</script>

<style>
.poem-title {
    font-size: 40px;
    text-shadow: 1px 1px grey;
}

.poem-text {
    border: 5px solid skyblue;
    padding: 20px;
    box-shadow: 5px 5px 5px 5px #888888;
}
</style>
