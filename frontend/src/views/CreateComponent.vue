<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
        <br>
      <h3 class="text-center">Add Student</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            v-model="student.firstName"
            required
          />
        </div>

        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            v-model="student.lastName"
            required
          />
        </div>

        <div class="form-group">
          <label>Class</label>
          <input
            type="text"
            class="form-control"
            v-model="student.class"
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
      student: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        class: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:8080/api/create-student";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/user");
          this.student = {
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