<template>
    <v-layout>
        <v-flex xs4>
            <panel title="Poem data">
                <v-text-field
                    label="Title *"
                    :rules="[rules.required]"
                    v-model="poem.title"
                ></v-text-field>

                <v-text-field
                    label="Author *"
                    :rules="[rules.required]"
                    v-model="poem.author"
                ></v-text-field>
            </panel>
        </v-flex>

        <v-flex xs4>
            <panel title="Nouns" class="ml-3">
                <v-text-field
                    label="Noun 1 *"
                    :rules="[rules.required]"
                    v-model="poem.noun1"
                ></v-text-field>

                <v-text-field
                    label="Noun 2 *"
                    :rules="[rules.required]"
                    v-model="poem.noun2"
                ></v-text-field>

                <v-text-field
                    label="Noun 3 *"
                    :rules="[rules.required]"
                    v-model="poem.noun3"
                ></v-text-field>
            </panel>
        </v-flex>

        <v-flex xs4>
            <panel title="Adjectives" class="ml-3">
                <v-text-field
                    label="Adj 1 *"
                    :rules="[rules.required]"
                    v-model="poem.adj1"
                ></v-text-field>

                <v-text-field
                    label="Adj 2 *"
                    :rules="[rules.required]"
                    v-model="poem.adj2"
                ></v-text-field>
        
                <v-text-field
                    label="Adj 3 *"
                    :rules="[rules.required]"
                    v-model="poem.adj3"
                ></v-text-field>
            </panel>
        </v-flex>

        <v-flex xs4>
            <panel title="Adverbs" class="ml-3">
                 <v-text-field
                    label="Adverb 1 *"
                    :rules="[rules.required]"
                    v-model="poem.adverb1"
                ></v-text-field>

                <v-text-field
                    label="Adverb 2 *"
                    :rules="[rules.required]"
                    v-model="poem.adverb2"
                ></v-text-field>

                <v-text-field
                    label="Adverb 3 *"
                    :rules="[rules.required]"
                    v-model="poem.adverb3"
                ></v-text-field>
            </panel>
        </v-flex>

        <v-flex xs4>
            <panel title="Prepositions" class="ml-3">
                 <v-text-field
                    label="Prep 1 *"
                    :rules="[rules.required]"
                    v-model="poem.prep1"
                ></v-text-field>
    
                <v-text-field
                    label="Prep 2 *"
                    :rules="[rules.required]"
                    v-model="poem.prep2"
                ></v-text-field>
        
                <v-text-field
                    label="Prep 3 *"
                    :rules="[rules.required]"
                    v-model="poem.prep3"
                ></v-text-field>
            </panel>
        </v-flex>

        <v-flex xs4>
            <panel title="Verbs" class="ml-3">
                 <v-text-field
                    label="Verb 1 *"
                    :rules="[rules.required]"
                    v-model="poem.verb1"
                ></v-text-field>
    
                <v-text-field
                    label="Verb 2 *"
                    :rules="[rules.required]"
                    v-model="poem.verb2"
                ></v-text-field>
        
                <v-text-field
                    label="Verb 3 *"
                    :rules="[rules.required]"
                    v-model="poem.verb3"
                ></v-text-field>
            </panel>
        </v-flex>

        <v-btn 
            dark
            class="light-blue"
            @click="create">
        Create Poem
        </v-btn>

        <div class="danger-alert" v-if="error">
            {{error}}
        </div>
    </v-layout>
</template>

<script>
    import Panel from '@/components/Panel'
    import PoemsService from '@/services/PoemsService'
    export default {
        data () {
            return {
                poem: {
                    title: null,
                    author:null,
                    noun1: null,
                    noun2: null,
                    noun3: null,
                    adj1: null,
                    adj2: null,
                    adj3: null,
                    adverb1: null,
                    adverb2: null,
                    adverb3: null,
                    prep1: null,
                    prep2: null,
                    prep3: null,
                    verb1: null,
                    verb2: null,
                    verb3: null
                },
                rules: {
                    required: (value) => !!value || 'Required.'
                },
                error: null
            }
        },
        components: {
            Panel
        },
        methods: {
            async create () {
                this.error= null
                const isEverythingFilled = Object
                    .keys(this.poem)
                    .every(key => !!this.poem[key])
                if(!isEverythingFilled) {
                    this.error = 'Please fill all required fields!'
                    return
                }
                try{
                    await PoemsService.post(this.poem)
                    this.$router.push({
                        name: 'poems'
                    })
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
</script>

<style>

</style>
