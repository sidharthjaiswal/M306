<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update Student</h3>
      <form @submit.prevent="handleUpdateForm">
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
      student: {},
    };
  },
  created() {
    let apiURL = `http://localhost:8080/api/edit-student/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.student = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:8080/api/update-student/${this.$route.params.id}`;

      axios
        .post(apiURL, this.student)
        .then((res) => {
          console.log(res);
          this.$router.push("/user");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>