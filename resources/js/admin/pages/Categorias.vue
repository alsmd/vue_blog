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
            :headers="{'x-csrf-token':token,'X-Requested-With':'XMLHttpRequest'}"
            :format="['jpg','jpeg','png']"
            :on-success="handleSuccess"
            :on-error="handleError"
            :on-format-error="handleFormatError"
            :max-size="2048"
            :on-remove="removeImage"
            ref="uploads"
            >
                <div style="padding: 20px 0">
                    <p>Click or drag files here to upload</p>
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                </div>
            </Upload>
            <div class="image_thunb" v-if="newCategoria.iconImage">
                <img :src="`/uploads/${newCategoria.iconImage}`"  width="90%" style="margin:5px 5%" @click="removeImage">
                <Icon type="ios-trash-outline" size="50"></Icon>
            </div>
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
        },

        //File Methods
        handleSuccess (res, file) {
            this.newCategoria.iconImage = res;
        },
        handleError (file,response) {
            this.error(response.errors.file.length? response.errors.file[0] : 'Houve um erro inesperado!');
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        async removeImage(){
            let img  = this.newCategoria.iconImage;
            this.newCategoria.iconImage = '';
            const res = await this.callApi('post','/delete_image',{imageName:img});
            console.log(res);
            if(res.status !=200){
                this.newCategoria.iconImage = img;
                this.error('não foi possivel apagar a imagem')
            }else if(res.tatus == 200){
                this.$refs.uploads.clearFiles();
            }
        }
    }
}
</script>

<style>
.image_thunb{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image_thunb img{
    z-index: 1000;
    cursor: pointer;
}
.image_thunb img:hover{
    opacity: .5;
}
.image_thunb img:hover + i{
    display: block;
}
.image_thunb i {
    position: absolute;
    display: none;
}
</style>