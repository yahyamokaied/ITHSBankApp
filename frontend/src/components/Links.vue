
<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/history">History</router-link>
        <router-link to="/user1">User1</router-link>
        <router-link to="/user2">User2</router-link>
    </div>
</template>

<script>
    export default {
        name: "Links"
    }
</script>

<style scoped>
    #nav {
        background: #9e2a2b;
        box-shadow: .15em .15em #540b0e;
        padding: .75em;
        font-size: 1.5em;
        display: flex;
        justify-content: space-evenly;
    }
    #nav a {
        font-weight: bold;
        color: #fdfcdc;
    }
    #nav a.router-link-exact-active {
        color: #f28482;
    }
    #nav a:hover {
        color: f5cac3;
    }
</style>