<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Mission Commander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="mcommander.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="mcommander.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="mcommander.mainStack"
          name="mainStack"
        />
      </div>
      <button @click="saveMCommander" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Mission Commander creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMCommander">Add</button>
    </div>
  </div>
</template>

<script>
import MCommanderService from "../services/MCommanderService";
export default {
  name: "add-mcommander",
  data() {
    return {
      mcommander: {
        id: null,
        name: "",
        username: "",
        mainStack: ""
      },
      submitted: false
    };
  },
  methods: {
    saveMCommander() {
      var data = {
        name: this.mcommander.name,
        username: this.mcommander.username,
        mainStack: this.mcommander.mainStack
      };
      MCommanderService.create(data)
        .then(response => {
          this.mcommander.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMCommander() {
      this.submitted = false;
      this.mcommander = {};
    }
  }
};
</script>
