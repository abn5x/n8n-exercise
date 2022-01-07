import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import { Person, PersonsState, RootState } from "../types/state";

export const state: () => PersonsState = () => ({
  persons: [
    { firstName: "Jill", lastName: "Smith" },
    { firstName: "Eve", lastName: "Jackson" }
  ]
});

export const getters: GetterTree<PersonsState, RootState> = {};

export const mutations: MutationTree<PersonsState> = {
  setPersons(state, persons: [Person]) {
    state.persons = persons;
  },
  addPerson(state, person: Person) {
    state.persons.push(person);
  },
  removePerson(state, index) {
    state.persons = state.persons.filter((_, idx) => idx !== index);
  }
};

export const actions: ActionTree<PersonsState, RootState> = {};
