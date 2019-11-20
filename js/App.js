export default {

  template: `
    <div id="app">
      <h1>{{header}}</h1>
      <input v-model="header">
      <input v-model="firstName" placeholder="First name">
      <input v-model="lastName" placeholder="Last name">
      <button v-on:click="addNewPerson">add person</button>
      <person 
      v-for="person of persons"
      v-bind:key=person.firstName
      v-bind:newPerson="fredrik" 
      / >
    </div>
  `,
  data(){
    return{
    header: 'vue startsida',
    firstName:"",
    lastName:"",
    persons: [],
    fredrik: {
      firstName:'Fredrik',
      lastName:'Jönsson'
    }
  }
  }
,
methods: {
  addNewPerson() {
    this.fredrik.firstName = this.firstName;
    this.fredrik.lastName = this.lastName;

    this.firstName = '';
    this.lastName = '';


  }
}
}