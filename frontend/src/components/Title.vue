<template>
    <div id="title">
        {{titleText}}
    </div>
</template>

<script>
    export default {
        name: "Title",
        props: {
            titleText: String
        }
    }
</script>

<style scoped>
    #title{
        padding:.4em;
        font-size:2em;
    }
</style>