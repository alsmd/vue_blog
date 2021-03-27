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
            <h3 class="titulo">Recent news</h3>
            <Noticias :noticias="noticias" />
        </div>
    </div>
</template>

<script>
import Noticias from '../components/Noticias.vue';
export default {
    data(){
        return{
            noticias:[
                {
                 date:'01/01/2003',
                 title:'Primeira noticia dinamica',
                 categoria:'Esporte'   
                },
                {
                 date:'01/01/2003',
                 title:'Primeira noticia dinamica',
                 categoria:'Esporte'   
                },
                {
                 date:'01/01/2003',
                 title:'Primeira noticia dinamica',
                 categoria:'Esporte'   
                },
                {
                 date:'01/01/2003',
                 title:'Primeira noticia dinamica',
                 categoria:'Esporte'   
                },
                {
                 date:'01/01/2003',
                 title:'Primeira noticia dinamica',
                 categoria:'Esporte'   
                },
                {
                 date:'01/01/2003',
                 title:'Primeira noticia dinamica',
                 categoria:'Esporte'   
                }
            ]
        }
    },
    components:{
        Noticias
    }
}
</script>

<style>

</style>