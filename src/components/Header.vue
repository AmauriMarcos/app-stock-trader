<template>
    <div class="group">
        <ul>
            <router-link tag='li' to="/" exact-active-class="active" exact>Stock Trader</router-link>
            <router-link tag='li' to="/portfolio" exact-active-class="active" >Portfolio</router-link>
            <router-link tag='li' to="/stocks" exact-active-class="active">Stocks</router-link>
        </ul>

        <div class="select">    
            <button class="btn">End day</button>
        </div>             
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss">
    ul{
        display: flex;
        list-style: none;
        
    }

    li{
        margin-right: 1rem;
        cursor: pointer;
    }

    li:first-child{
        font-weight: bold;
    }
    .btn{
        border: 1px solid #ff2e63;
        border-radius: 3px;
        background-color: transparent;
        padding: .3rem .7rem;
        color: #fff;
        font-size: .8rem;
        text-transform: uppercase;
        cursor: pointer;
        outline: none;
    }

    .btn:hover{
        background-color:#ff2e63 ;
    }

    .active{
        color: #ff2e63;       
    }

    .group{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .select{
        display: flex;
    }
</style>