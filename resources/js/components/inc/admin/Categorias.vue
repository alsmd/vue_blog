<template>
    <div id="items-table">
        <header>
            <div class="">
                Id
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
</template>

<script>
export default {
    props:['categorias']
}
</script>

<style>

</style>