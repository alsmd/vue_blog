<template>
    <div id="home">
        <div class="area-noticias-recentes">
            <h3 class="titulo">Categorias</h3>
                <div id="items-table">
                    <header>
                        <div class="">
                            Foto
                        </div>
                        <div class="">
                            Nome
                        </div>
                        <div class="">
                            Ações
                        </div>
                    </header>
                    <div class="item" v-for="(categoria,indice) in categorias" :key="indice" style="grid-template-columns: 1fr 2fr 3fr !important;">
                        <div class="light">
                            {{categoria.id}}
                        </div>
                        <div class="weight-bold">
                            {{categoria.nome}}
                        </div>
                        <div class="action">
                            <button class="btn btn-dark view">View</button>
                            <button class="btn btn-info edit">Edit</button>
                            <button class="btn btn-success make-card">Make Card</button>
                            <button class="btn btn-danger delete">Delete</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style>

</style>