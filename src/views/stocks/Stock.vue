<template>
    <div>
        <div>
            <div class="card">
                <h3 class="card__name">{{stock.name}}</h3>
                <p class="card__code">Code: {{stock.id}}</p>
                <p class="card__price">Price: {{stock.price}}</p>
                <input class="card__input" type="number" placeholder="Quantity" v-model="quantity">
                <button 
                    class="card__button" 
                    @click='buyStock' 
                    :disabled='quantity <= 0 || !Number.isInteger(+quantity)'>Buy</button>       
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['stock'],
    data(){
        return{
            quantity: 0,
        }
    },
    methods: {
        buyStock(){
          const order = {
              stockId: this.stock.id,
              stockPrice: this.stock.price,
              quantity: Number(this.quantity)
          }
          console.log(order);
          this.quantity = 0;
        }
    }
}
</script>

<style lang="scss">
.card{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: .6rem;
        border-radius: 3px;
        border: 1px solid #ccc;
        padding: 1rem .5rem;

        &__name{
            font-weight: bold;
            grid-column: 1/3;
            grid-row: 1/2;
          
        }

        &__code{
            grid-column: 3/4;
            grid-row: 1/2;
            font-size: .8rem;

        }

        &__price{
            grid-column: 1/-1;
            grid-row: 2/3;
        }

        &__input{
            grid-column: 1/3;
            grid-row: 3/4;
            border-radius: 3px;
            border: 1px solid #ccc;
            padding: .6rem;
            outline: none;
        }


        &__button{
            grid-column: 3/4;
            grid-row: 3/4;
            border-radius: 3px;
            border: 1px solid #ff2e63;
            outline: none;
            text-transform: uppercase;
            color: #ff2e63;;
            justify-self: center;
            padding: .4rem .8rem;
        }

        &__button:hover{
            background-color: #ff2e63; 
            color: white;
        }

         
    }


</style>