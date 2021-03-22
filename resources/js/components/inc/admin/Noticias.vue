<template>
    <div id="items-table">
        <header>
            <div class="">
                Data
            </div>
            <div class="">
                Titulo
            </div>
            <div class="">
                Categoria
            </div>
            <div class="">
                Ações
            </div>
        </header>
        <div class="item" v-for="(noticia,indice) in noticias" :key="indice">
            <div class="light">
                {{noticia.date}}
            </div>
            <div class="weight-bold">
                {{noticia.title}}
            </div>
            <div class="light">
                {{noticia.categoria}}
            </div>
            <div class="action">
                <button class="btn btn-dark view">View</button>
                <button class="btn btn-info edit">Edit</button>
                <button class="btn btn-success make-card">Make Card</button>
                <button class="btn btn-danger delete">Delete</button>
            </div>
        </div>
</div>
</template>

<script>
export default {
    props:['noticias']
}
</script>

<style>

</style>