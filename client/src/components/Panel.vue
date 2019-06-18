<!-- This vue file simply creates a panel that will be re-used in many of our other js files.  It simply
     keeps things nice and organized.  No need for repeating code.
-->
<template>
    <div class ="white elevation-2">
        <v-toolbar flat dense class="light-blue" dark>
            <v-toolbar-title> {{title}} </v-toolbar-title>
            <slot name="makePoem">
            
            </slot>
            
        </v-toolbar>

       

        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>
                No poems have been created yet.
            </slot>
        </div>
    </div>
</template>


<script>
// This panel has the ability to be passed down props, such as title.  Parent component will pass down a title, which will be rendered
export default {
    props: [
        'title'
    ]

}
</script>

<style scoped>

</style>
