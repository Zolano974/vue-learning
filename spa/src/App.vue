<template>
    <div id="app">
        <div class="container">
            <nav class="navbar">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <span class="icon">
                            <i class="fa fa-arrow-left"></i>
                        </span>
                        <router-link :to="{name: 'Shows'}" class="navbar-item">
                            Search
                        </router-link>
                        <router-link :to="{name: 'Favorites'}" class="navbar-item">
                            Favorite
                        </router-link>
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start">
                    </div>
                </div>
            </nav>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
