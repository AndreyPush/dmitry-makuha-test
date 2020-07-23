<template>

    <section>

        <ul>
            <li v-for="(item, i) in items" :key="i">
                <router-link :to="`/${thisDate}/${i}`">{{item.title}}</router-link>
            </li>
        </ul>

    </section>

</template>

<script>

    export default {
        data: ()=>({
            items: [],
            thisDate: ''
        }),
        created(){
            let vm = this;

            vm.thisDate = vm.$route.params.date;

            let date = vm.moment(vm.$route.params.date).format('YYYY/M/D');

            vm.axios.get(`http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${date}`).then(r=>{
                vm.items = r.data.celebrations
            })

        }
    }

</script>
