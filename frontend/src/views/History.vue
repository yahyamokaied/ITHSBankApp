<template>
    <div>
        <app-header title-text="Transactions History"></app-header>

  <div id="history">
    <ul>
      <li :key="operation.id" v-for="operation in operations">
        <p>Transaction ID - {{operation.OperationID}} -</p>
        <p></p>
        <p><b>Sender ID : {{operation.SenderID}} </b></p>
        <p><b>Reciver ID : {{operation.ReciverID}} </b></p>
        <p><b>Amount : {{operation.Amount}} SEK</b></p>

        <p>------------------------------</p>

      </li>
    </ul>
  </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    export default {
        name: "History",
        components:{
            appHeader: Header,
        },
        beforeMount() {
            this.fetchBankUsers()
            this.setTitle()
        },
  data () {
    return {
      operations: []
    }
    },
        methods:{
                fetchBankUsers () {
      fetch('http://localhost:3000/history')
        .then((response) => response.json())
        .then((result) => {
          this.operations = result
          console.log(result)
        })
        .catch(() => {
          console.log({ message: -1 })
        })
    },
            setTitle(){
                document.title = 'History'
            }
        }
    }
</script>

<style scoped>
</style>