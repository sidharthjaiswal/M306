<!-- /*
@Author: Sidharth Jaiswal
@version: 1.0v
@Latest Update: 28.06.2021
Status: Done

Descripton:  Student Record Management system. It efficiently allows users to perform CRUD operations.
             Schüler Datenbank Mangament system. Erlaubt den Nutzer effizient CRUD Operationen durchzuführen.

*/
-->
<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
        <br>
      <h3 class="text-center">Add Teacher</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            v-model="teacher.firstName"
            required
          />
        </div>

        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            v-model="teacher.lastName"
            required
          />
        </div>

        <div class="form-group">
          <label>Class</label>
          <input
            type="text"
            class="form-control"
            v-model="teacher.class"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      teacher: {
        firstName: "",
        lastName: "",
        class: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:8080/api/create-teacher";

      axios
        .post(apiURL, this.teacher)
        .then(() => {
          this.$router.push("/admin");
          this.teacher = {
            firstName: "",
            lastName: "",
            class: ""
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>