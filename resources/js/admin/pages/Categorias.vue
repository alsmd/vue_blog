<template>
    <div id="home">
        <div class="area-noticias-recentes">
           <div class="d-flex my-2 align-items-center">
                <h3 class="titulo">Categorias</h3>
                <div class="input-group w-25 ml-3">
                    <div class="input-group-append">
                        <button class="btn btn-outline-success" type="button" @click="toggleAddModel"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
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
                        <button class="btn btn-danger delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        
        <Modal
        v-model="addModel"
        title="Add Category"
        :loading="creatingCategoria"
        :mask-clsable="false"
        :closable="false"
        >
            <Upload
            multiple
            type="drag"
            action="/api/upload"
            :headers="{'x-csrf-token':token}"
            >
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </Upload>
            <input type="text" class="form-control" placeholder="Nome Categoria" v-model="newCategoria.categoriaName">

            <div slot="footer">
                <button class="btn btn-danger" @click="toggleAddModel">Close</button>
                <button class="btn btn-success">Add Categoria</button>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
    created(){
        this.token = window.Laravel.csrfToken;
    },
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
            ],
            addModel:false,
            newCategoria:{
                categoriaName:'',
                iconImage:null
            },
            creatingCategoria:false,
            token:''
        }
    },
    methods:{
        toggleAddModel(){
            this.addModel = !this.addModel;
        }
    }
}
</script>

<style>

</style>