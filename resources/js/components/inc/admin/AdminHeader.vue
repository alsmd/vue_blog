<template>
    <div id="adminHeader">
       <div class="area-logo">
           <a href="" class="logo"><h3>Blog</h3></a>
       </div>
       <hr>
       <nav class="navegacao">
           <h3 class="nav-title">Admin</h3>
           <ul>
               <li> <router-link to="/admin" class="">Overview</router-link></li>
               <li class="dropdown">
                   <a   class="dropdown-toggle" id="dropdown-postes" role="button" data-toggle='dropdown' aria-haspopup='true' aria-expanded="true">Postes</a>
                   <div class="dropdown-menu" aria-labelledby="dropdown-postes">
                       <router-link to="/admin/post" class="dropdown-item">Exibir</router-link>
                   </div>
               </li>
               <li class="dropdown">
                   <a   class="dropdown-toggle" id="dropdown-categoria" role="button" data-toggle='dropdown' aria-haspopup='true' aria-expanded="true">Categoria</a>
                   <div class="dropdown-menu" aria-labelledby="dropdown-categoria">
                       <router-link  to="/admin/categoria" class="dropdown-item">Exibir</router-link>
                   </div>
               </li>
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