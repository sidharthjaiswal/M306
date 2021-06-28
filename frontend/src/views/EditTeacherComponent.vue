<!-- /*
@Author: Sidharth Jaiswal
@version: 1.0v
@Latest Update: 24.06.2021
Status: Done

Descripton:  School Record Management system. It efficiently allows users to perform CRUD operations.
             Schüler Datenbank Mangament system. Erlaubt den Nutzer effizient CRUD Operationen durchzuführen.

*/
-->


<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
        <br>
      <h3 class="text-center">Update Teacher</h3>
      <form @submit.prevent="handleUpdateForm">
         <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            v-model="lehrer.firstName"
            required
          />
        </div>

        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            v-model="lehrer.lastName"
            required
          />
        </div>

        <div class="form-group">
          <label>Class</label>
          <input
            type="text"
            class="form-control"
            v-model="lehrer.class"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block">Update</button>
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
      lehrer: {},
    };
  },
  created() {
    let apiURL = `http://localhost:8080/api/edit-teacher/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.lehrer = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:8080/api/update-teacher/${this.$route.params.id}`;

      axios
        .post(apiURL, this.lehrer)
        .then((res) => {
          console.log(res);
          this.$router.push("/admin");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>