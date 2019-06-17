<template>
    <v-layout row>
        <v-flex>
            <panel title="Poems">
                <div v-for="poem in poems" :key="poem.title">
                    {{poem.Author}} - 
                    {{poem.timestamp}} 
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
    import Panel from '@/components/Panel'
    import PoemsService from '@/services/PoemsService'
    export default {
        data () {
            return {
                poems: null
            }
        },
        components: {
            Panel
        },
        async mounted () {
            // do a request to backend to get all poems
            this.poems = await PoemsService.index()

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

