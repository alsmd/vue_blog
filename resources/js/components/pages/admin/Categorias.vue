<template>
    <div id="home">
        <div class="area-indice">
            <div class="indice">
                <div class="left">
                    <p class="numero">3</p>
                    <p class="nome">Today's news</p>
                </div>
                <div class="right">

                </div>
            </div>

            <div class="indice">
                <div class="left">
                    <p class="numero">3</p>
                    <p class="nome">Today's news</p>
                </div>
                <div class="right">

                </div>
            </div>


            <div class="indice">
                <div class="left">
                    <p class="numero">3</p>
                    <p class="nome">Today's news</p>
                </div>
                <div class="right">

                </div>
            </div>


            <div class="indice">
                <div class="left">
                    <p class="numero">3</p>
                    <p class="nome">Today's news</p>
                </div>
                <div class="right">

                </div>
            </div>
        </div>
        <div class="area-noticias-recentes">
            <h3 class="titulo">Categorias</h3>
            <Categorias :categorias="categorias" />
        </div>
    </div>
</template>

<script>
import Categorias from '../../inc/admin/Categorias.vue';
export default {
    data(){
        return{
            categorias:[
                {
                 id:1,
                 nome:'Acao',
                },
                {
                 id:2,
                 nome:'Esporte',
                },
                {
                 id:3,
                 nome:'Aventura',
                },
                {
                 id:4,
                 nome:'Informatica',
                },
                {
                 id:5,
                 nome:'Todos',
                }
            ]
        }
    },
    components:{
        Categorias
    }
}
</script>

<style>

</style>