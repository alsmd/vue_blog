<template>
    <div id="admin">
        <div class="row m-0 p-0">
            <div class="col-2 m-0 p-0">
                <AdminHeader />
            </div>
            <div class="col-10 m-0 p-0">
                <Navbar />
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import AdminHeader from '../../inc/admin/AdminHeader.vue'
import Navbar from '../../inc/admin/Navbar.vue'
export default {
    components:{
        AdminHeader,
        Navbar
    }
}
</script>

<style>

</style>