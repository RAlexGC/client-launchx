import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/mcommanders",
    name: "missionCommanders",
    component: () => import("./components/MCommandersList")
  },
  {
    path: "/mcommander/:id",
    name: "mc-details",
    component: () => import("./components/MCommander")
  },
  {
    path: "/addmc",
    name: "add-mc",
    component: () => import("./components/AddMCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
