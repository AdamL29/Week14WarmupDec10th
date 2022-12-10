<template>
    <div>
        <router-link to="/">Home</router-link>
        <h1>Advice</h1>
        <p>{{advice}}</p>
        <!-- Calls a DATA Return function by it's name -->
    </div>
</template>

<script>
import cookies from 'vue-cookies';

    export default {
        name: 'AdvicePage',
        data() {
            return {
                // use empty string to use for populating a string into it.
                advice: ""
                // Known as this.advice in script calls.
            }
        },
        methods: {
            displayAdvice() {
                // Get the information from the cookie stored in the name.
                let advice = cookies.get('advice');
                
                // Below: if the cookie does not match, show an error.
                if (advice == undefined){
                    this.advice = "Error"
                
                    // Below: If this.advice matches, then display the cookie.
                }else{
                    this.advice = advice;
                }
            }
        },
        mounted () {
            this.displayAdvice();
            // Call the mounted WITH ().
        },
    }
</script>

<style scoped>

</style>