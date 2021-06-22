<template>
  <div class="overflow-auto">
    <div class="row">
      <div class="col-md-12">
        <br>
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in Students" :key="student._id">
              <td>{{ student.firstName }}</td>
              <td>{{ student.lastName }}</td>
              <td>{{ student.class }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      Sorting By: <b>{{ sortBy }}</b
      >, Sort Direction:
      <b>{{ sortDesc ? "Descending" : "Ascending" }}</b>
    </div>
    <br />
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sortBy: "firstname",
      sortDesc: false,
      perPage: 3,
      currentPage: 1,
      Students: [],
    };
  },

  created() {
    let apiURL = "http://localhost:8080/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/api/delete-student/${id}`;
      let indexOfArrayItem = this.Students.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Students.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  computed: {
    rows() {
      return this.Students.length;
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>