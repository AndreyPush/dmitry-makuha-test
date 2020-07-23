<template>

    <section>

        <h1>Type any date</h1>

        <date-picker :mode='mode' v-model='selectedDate' />

        <button @click="send" :disabled="!selectedDate">Send</button>

    </section>

</template>

<script>

    export default {
        data: ()=>({
            mode: 'single',
            selectedDate: null,
        }),
        methods:{
            send(){

                let date = this.moment(this.selectedDate).format('YYYY-MM-DD')

                this.$router.push(`/${date}`);

            }
        }
    }

</script>
