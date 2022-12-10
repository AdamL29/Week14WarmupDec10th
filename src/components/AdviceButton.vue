<template>
    <div>
        <button @click="getAdvice">Get Advice</button>
    </div>
</template>

<script>
import router from '@/router'; // Needed when using a router-push
import axios from 'axios';
import cookies from 'vue-cookies';

    export default {
        name: 'AdviceButton',
        methods: {
            getAdvice() {
                axios.request({
                    // Link axios to button to get the request made.
                url : 'https://api.adviceslip.com/advice',
                method: "GET" //Default is GET and doesn't need to be specified.
                
                // response.data.slip.advice is the advice location.
                }).then((response)=>{
                    cookies.set('advice', response.data.slip.advice);
                    // Creates the cookie under the name "advice".

                    router.push('/advice');
                    // router.push('location of where you want to take the user when clicked and axios is successful')

                }).catch(()=>{
                    document.querySelector(`button`).insertAdjacentHTML(`beforebegin`, `<p>No advice found</p>`);
                    // Inserts an error before the button without moving inside the button.
                });
            }
        },
    }
</script>

<style scoped>
div{
    margin-top: 5px;
}
</style>