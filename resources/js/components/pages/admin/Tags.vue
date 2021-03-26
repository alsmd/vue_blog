<template>
    <div id="home">
        <div class="area-noticias-recentes">
            <div class="d-flex my-2 align-items-center">
                <h3 class="titulo">Tags</h3>
                <div class="input-group w-25 ml-3">
                    <input type="text" class="form-control" placeholder="New Tag" v-model="newTag.tagName" @keyup.enter="saveTag()">
                    <div class="input-group-append">
                        <button class="btn btn-outline-success" type="button" @click="saveTag()"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
            <div id="items-table">
                <header style="grid-template-columns:1fr 3fr 3fr 2fr">
                    <div class="">
                        Id
                    </div>
                    <div class="">
                        Nome
                    </div>
                    <div class="">
                        Created At
                    </div>
                    <div class="">
                        Ações
                    </div>
                </header>
                <div class="item" v-for="(tag,indice) in tags" :key="indice" style="grid-template-columns:1fr 3fr 3fr 2fr">
                    <div class="light">
                        {{tag.id}}
                    </div>
                    <div class="weight-bold">
                        <span v-if="editing != indice">{{tag.tagName}} </span>
                        <input type="text" class="form-control" v-if="editing == indice" @keyup.enter="updateTag(tag.id)" v-model="updatedTag.tagName">
                    </div>
                    <div class="light">
                        {{formatData(tag.created_at)}}
                    </div>
                    <div class="action">
                        <button class="btn btn-info edit" @click="toggleEdit(indice)">Edit</button>
                        <button class="btn btn-danger delete" @click="confirmarDelete(tag.id,indice)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async created(){
        let res = await this.callApi('GET','/tag',{});
        if(res.status == 200){
            this.tags = res.data;
        }
    },
    data(){
        return{
            delete_id:'',
            delete_indice:'',
            tags:[],
            newTag:{
                tagName:''
            },
            updatedTag:{
                tagName:''
            },
            editing:null
        }
    },
    methods:{
        formatData($data){
            if($data != null){
               return  $data.slice(0,10);
            }else{
                return '';
            }
        },
         confirmarDelete(id,indice){
             this.delete_id = id;
             this.delete_indice = indice
            this.confirm(this.deleteTag);
        },
        toggleEdit(indice){
            //caso outra tag esteja sendo editada ou nenhuma tag esteja sendo editada iremos abrir o modo editing da tag selecionada
            //caso o button da tag que ja esta no modo edit seja precionado o modo edit sera fechado
            if(this.editing == null || this.editing != indice){
                this.editing = indice
                this.updatedTag.tagName = this.tags[indice].tagName
            }else{
                this.editing = null
            }
        },
        /*Crud*/
        async saveTag(){
            if(this.newTag.tagName.trim() == ''){
                this.error('O nome da tag não pode ser nulo');
                return 0;
            }
            let res = await this.callApi('POST','/tag',this.newTag);
            if(res.status == 200){
                this.tags.unshift(res.data);
                this.newTag.tagName = '';
                this.success('Tag Salva Com Sucesso');
            }else{
                console.log(res);
            }
        },
        
        async deleteTag(){
            let res = await this.callApi('DELETE',`tag/${this.delete_id}`);
            if(res.data > 0){
                this.success('Tag apagada com sucesso');
                this.tags.splice(this.delete_indice,1);
            }else{
                this.error('Erro ao apagar tag')
            }
            this.delete_id = '';
            this.delete_indice = '';
        },
        async updateTag(id){
            let res = await this.callApi('PUT',`/tag/${id}`,this.updatedTag);

            if(res.data > 0){
                this.success('Tag Atualizada com Sucesso!');
                this.tags[this.editing].tagName = this.updatedTag.tagName;
                this.editing = null;
            }else{
                this.error('Erro ao atualizar Tag!')
                this.editing = null;
            }
        }

    }
    
    
}
</script>

<style>

</style>