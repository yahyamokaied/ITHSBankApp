<template>
    <div>
  <app-header title-text="User Profile 1"></app-header>
    <h2>User Profile</h2>
    <ul>
      <li :key="user.id" v-for="user in users">
        <p><b>ID {{user.UserID}} -   </b>{{user.Fname}} {{user.Lname}}  -  Account No :{{user.AccountNo}}</p>
        <p></p>
        <p><b>Balance : {{lasamount}} SEK</b></p>
        <p>------------------------------</p>
      </li>
    </ul>
            <p><b>Send From : {{currentUser}}</b></p>
      <select v-model="currentUser" id="select">
        <option v-for="user in users" :value="user.UserID" :key="user.userID">{{ user.Fname }}</option>
      </select>

                  <p><b>Send Money To : {{selected}}</b></p>
      <select v-model="selected" id="select">
        <option v-for="reciver in recivers" :value="reciver.UserID" :key="reciver.userID" >{{ reciver.Fname }}</option>
      </select>
      <br>
              <form @submit.prevent="onSubmit">
                            <p><b>Amount</b></p>
              <input type="text" v-model="amount" placeholder="amount">
                    <br>
                    <br>

              <button>submit</button>
                    <br>

              </form>
      </div>
</template>

<script>
import axios from 'axios';
import VueAxios from 'vue-axios';
    import Header from "../components/Header";
    export default {
        name: "sendHistory",
        components:{
        appHeader: Header,
        },
        beforeMount() {
            this.fetchBankUsers()
            this.fetchBankRecivers()
            this.setTitle()
        },
  data () {
    return {
      users: [],
      recivers: [],
      selected: null,
      selectedbalance: null,
      currentUser: null,
      amount: null,
      newamount: null,
      lasamount:null

    }
    },
        methods:{
      fetchBankUsers () {
      fetch('http://localhost:3000/user1')
        .then((response) => response.json())
        .then((result) => {
          this.users = result
          this.lasamount = result[0].Balance
          console.log(result)
          this.currentUser = users[0].UserID
        })
        .catch(() => {
          console.log({ message: -1 })
        })
    },
      async fetchBankRecivers () {
      const response = await axios.get('http://localhost:3000/users')
        .then((response) => {this.recivers = response.data})
        .catch(() => {
          console.log({ message: -1 })
        })
    },
            setTitle(){
                document.title = 'User1'
            },
onSubmit() {

const formData = new FormData()
          formData.append('SenderID', this.currentUser)
          formData.append('ReciverID', this.selected)
          formData.append('Amount', this.amount)
axios.post('http://localhost:3000/history', formData, {
          }).then((res) => {
            alert("Transaction was completed successfully")
          })
this.newamount = (this.lasamount - this.amount)

axios.put('http://localhost:3000/users', {
          Balance: this.newamount,
          UserID: this.currentUser
          }).then((res) => {
            alert("Transaction user1 done")
          })

this.newamount = (this.lasamount + this.amount)

axios.put('http://localhost:3000/users', {
          Balance: this.newamount,
          UserID: this.selected
          }).then((res) => {
            alert("Transaction user1 done")
          })

        },
        }
    }
</script>

<style scoped>
#select {
  width:10em;
  font-size:1em;
  }
  #button {
  padding-top: 2em;
  align-self: center;
  font-size:1em;
  }
</style>