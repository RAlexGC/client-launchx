<template>
<h4>Mission Commander</h4>
  <div v-if="currentMCommander" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMCommander.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMCommander.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Misión</label>
        <input type="text" class="form-control" id="title"
          v-model="currentMCommander.mainStack"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteMCommander">
      Eliminar Mission Commander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un Mission Commander. </p>
  </div>
</template>
<script>
import MCommanderService from "../services/MCommanderService";
export default {
  name: "mcommander",
  data() {
    return {
      currentMCommander: null,
      message: ''
    };
  },
  methods: {
    getMCommander(id) {
      MCommanderService.get(id)
        .then(response => {
          this.currentMCommander= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMCommander() {
      MCommanderService.delete(this.currentMCommander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "mcommanders" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMCommander() {
      MCommanderService.update(this.currentMCommander.id, this.currentMCommander)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMCommander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
