<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#@">Troov Api demonstration</a>
                <button class="navbar-toggler" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <nuxt-link to="/"><a class="nav-link" aria-current="page">Create Object</a></nuxt-link>
                        </li>
                        <li class="nav-item">
                        <nuxt-link to="/allObject"><a class="nav-link" >All Objects</a></nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<style scoped>
</style>