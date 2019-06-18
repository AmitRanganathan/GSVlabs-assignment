<template>
    <v-layout row>
        <v-flex>
            <panel title="Poems">
                <v-btn v-if="$store.state.isLoggedIn"
                    slot="makePoem"
                    @click="navigateTo({name: 'poems-create'})"
                    fab
                    class="blue-grey lighten-5"
                    light
                    absolute
                    right
                    middle>
                    <v-icon>add</v-icon>
                </v-btn>

                <div class="poem" v-for="poem in poems" :key="poem.id">
                    <v-layout>
                        <v-flex xs6>
                            <div class="poem-title">
                                {{poem.title}} 
                            </div>
                            BY
                            <div class="poem-author">
                                {{poem.author}} 
                            </div>
                            <v-btn 
                                dark
                                class="light-blue"
                                @click="navigateTo({
                                    name: 'poem', 
                                    params: {
                                        poemId: poem.id
                                    }
                                })">
                                View Poem
                            </v-btn>
                        </v-flex>

                        <v-flex xs6>
                            <div class="poem-date-created">
                                Created on: {{moment(poem.createdAt).format('MMMM Do YYYY h:mm a')}}
                            </div>
                        </v-flex>
                    </v-layout>
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
    import Panel from '@/components/Panel'
    import PoemsService from '@/services/PoemsService'
    import moment from 'moment'
    export default {
        data () {
            return {
                poems: null
            }
        },
        components: {
            Panel
            
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            moment
        },
        async mounted () {
            // do a request to backend to get all poems
            this.poems = (await PoemsService.index()).data
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.poem {
    padding: 20px;
    height: 200px;
    overflow: hidden;
}
.poem-title {
    font-size: 24px
}

.poem-author {
    font-size: 16px
}

.poem-date-created {
    font-size: 15px
}
</style>

