<template>
    <div>
        <div v-if="isAdminPage">
            <AdminPage />
        </div>
        <div v-else>
            <h1>Pagina da minha aplicação</h1>
        </div>
    </div>
</template>
<script>
import AdminPage from '../admin/Layout.vue'
export default {
    data(){
        return{
            isAdminPage:false
        }
    },
    components:{
        AdminPage
    },
    created(){
        let path =  this.$route.path;
        this.isAdminPage = path.startsWith('/admin');
    }
}
</script>
