<template>
    <div>
        <router-link to="/">Home</router-link>
        <h1>Advice</h1>
        <p>{{advice}}</p>
    </div>
</template>

<script>
import cookies from 'vue-cookies';

    export default {
        name: 'AdvicePage',
        data() {
            return {
                advice: ""
                // Known as this.advice in script calls.
            }
        },
        methods: {
            displayAdvice() {
                let advice = cookies.get('advice');
                if (advice == undefined){
                    this.advice = "Error"
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