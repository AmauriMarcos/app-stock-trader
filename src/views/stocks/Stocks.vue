<template>
    <div>
        <div class="stocks">
            <app-stock v-for="stock in stocks" :stock='stock' :key='stock.id'></app-stock>
        </div>
    </div>
</template>

<script>
import Stock from './Stock.vue';
export default {
    components:{
        appStock: Stock
    },
    data(){
        return{
            stocks: [
                {id: 1, name: 'BMW', price: 110},
                {id: 2, name: 'Google', price: 200},
                {id: 3, name: 'Apple', price: 250},
                {id: 4, name: 'Twitter', price: 8}
            ]
        }
    }
}
</script>

<style lang="scss">
    .stocks{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
    }

</style>