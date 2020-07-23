<template>

    <section>
        <h2>title: {{celebrationInfo.title}}</h2>
        <p>rank: {{celebrationInfo.rank}}</p>
        <p>rank_num: {{celebrationInfo.rank_num}}</p>
        <p>colour: {{celebrationInfo.colour}}</p>
    </section>

</template>

<script>

    export default {
        data: ()=>({
            celebrationInfo: {}
        }),
        created(){
            let vm = this;

            let date = vm.moment(vm.$route.params.date).format('YYYY/M/D');

            vm.axios.get(`http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${date}`).then(r=>{
                vm.celebrationInfo = r.data.celebrations[vm.$route.params.index]
            })
        }
    }

</script>
