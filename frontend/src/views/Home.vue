<template>
    <div id="home">
        <app-header title-text="Welcome to our App"></app-header>
                <div> Developed By :   </div>
                <div> By : 1  </div>
                <div> By : 2  </div>
                <div> By : 3  </div>
                <div> By : 4  </div>
                <div> By : 5  </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    export default {
        name: "Home",
        components: {
            appHeader: Header
        },beforeMount() {
            this.setTitle()
        },
        methods:{
            setTitle(){
                document.title = 'Home'
            }
        }
    }
</script>

<style scoped>
    #home{
        flex-basis: 100%;
    }
</style>