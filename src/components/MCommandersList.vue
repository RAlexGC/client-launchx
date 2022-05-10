<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders Registrados  </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(mcommander, index) in mcommanders"
          :key="index"
          @click="setActiveMCommander(mcommander, index)"
        >
          {{ mcommander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMCommander">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentMCommander.username}}
          <br><label><strong>Main stack:</strong></label> {{ currentMCommander.mainStack}}
        </div>
        <router-link :to="'/mcommander/' + currentMCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un Mission Commander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MCommanderService from "../services/MCommanderService";

export default {
  name: "mcommander-list",
  data() {
    return {
      tutorials: [],
      mcommanders: [],
      currentTutorial: null,
      currentMCommander: null,
      currentIndex: -1,
      title: "",
      mcommanderId: ""
    };
  },
  methods: {
    getAllMissionCommanders(){
      MCommanderService.getAll()
        .then(response => {
          this.mcommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMCommander(mcommander, index) {
      this.currentMCommander = mcommander;
      this.currentIndex = mcommander? index : -1;
    }
  },
  mounted() {
    this.getAllMissionCommanders();
  }
};
</script>
