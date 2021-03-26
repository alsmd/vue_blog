<template>
    <div id="adminHeader">
       <div class="area-logo">
           <a href="" class="logo"><h3>Blog</h3></a>
       </div>
       <hr>
       <nav class="navegacao">
           <h3 class="nav-title">Admin</h3>
           <ul>
               <li :class="[$route.path == '/admin' ? 'selecionado':'']"> <router-link to="/admin" class="" >Dashbord</router-link></li>
               <li :class="[$route.path == '/admin/post' ? 'selecionado':'']"> <router-link to="/admin/post" class="" >Poste</router-link></li>
               <li :class="[$route.path == '/admin/categoria' ? 'selecionado':'']"> <router-link to="/admin/categoria" class="" >Categoria</router-link></li>
               <li :class="[$route.path == '/admin/tag' ? 'selecionado':'']"> <router-link to="/admin/tag" class="" >Tags</router-link></li>
               <!-- <li class="dropdown" :class="[$route.path.startsWith('/admin/post') ? 'selecionado':'']">
                   <a   class="dropdown-toggle" id="dropdown-postes" role="button" data-toggle='dropdown' aria-haspopup='true' aria-expanded="true">Postes</a>
                   <div class="dropdown-menu" aria-labelledby="dropdown-postes">
                       <router-link to="/admin/post" class="dropdown-item">Exibir</router-link>
                   </div>
               </li> -->
           </ul>
       </nav>
    </div>
</template>

<script>
export default {
    name:'AdminHeader'
}
</script>

<style>

</style>