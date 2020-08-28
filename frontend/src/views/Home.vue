<template>
    <div id="home">
        <app-header title-text="Welcome to our App"></app-header>
                <div> Developed By :   </div>
                <div> 1 : Christopher Lundqvist  </div>
                <div> 2 : Farah Adam  </div>
                <div> 3 : William Väisänen  </div>
                <div> 4 : Alfred Sävblom  </div>
                <div> 5 : Yahya Mokaied  </div>
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