<template>
  <div>
    <div class="table-container">
      <table style="width:100%">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(person, index) in persons"
            :key="person.firstName + person.lastName + index"
          >
            <td>{{ person.firstName }}</td>
            <td>{{ person.lastName }}</td>
            <td><el-button @click="remove(index)">Remove</el-button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="input-container">
      <el-input placeholder="Firstname" v-model="firstName">{{
        firstName
      }}</el-input>
      <el-input placeholder="Lastname" v-model="lastName">{{
        lastName
      }}</el-input>
      <el-button @click="add">Add</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from "nuxt-property-decorator";
import { Person } from "~/types/state";

const persons = namespace("persons");
@Component({
  name: "index"
})
export default class Index extends Vue {
  firstName: string = "";
  lastName: string = "";

  @persons.State
  public persons!: Person[];
  @persons.Mutation
  public addPerson!: (person: Person) => void;
  @persons.Mutation
  public removePerson!: (index: number) => void;

  reset() {
    this.firstName = "";
    this.lastName = "";
  }

  add() {
    const { firstName, lastName } = this;
    this.addPerson({
      firstName,
      lastName
    });
    this.reset();
  }

  remove(index: number) {
    this.removePerson(index);
  }
}
</script>

<style scoped>
.table-container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input-container {
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}

.el-input {
  margin-right: 2rem;
}

table,
th,
td {
  border: 1px solid black;
  padding: 15px;
}
</style>
