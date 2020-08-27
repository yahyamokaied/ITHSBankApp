<template>
    <div>
        <app-header title-text="Bank Customers"></app-header>

  <div id="user">
    <ul>
      <li :key="user.id" v-for="user in users">
        <p><b>ID {{user.UserID}} -   </b>{{user.Fname}} {{user.Lname}}  -  Account No :{{user.AccountNo}}</p>
        <p></p>
        <p><b>Balance : {{user.Balance}} SEK</b></p>
        <p>------------------------------</p>

      </li>
    </ul>
  </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    export default {
        name: "Users",
        components:{
            appHeader: Header,
        },
        beforeMount() {
            this.fetchBankUsers()
            this.setTitle()
        },
  data () {
    return {
      users: []
    }
    },
        methods:{
                fetchBankUsers () {
      fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((result) => {
          this.users = result
          console.log(result)
        })
        .catch(() => {
          console.log({ message: -1 })
        })
    },
            setTitle(){
                document.title = 'Users'
            }
        }
    }
</script>

<style scoped>
</style>