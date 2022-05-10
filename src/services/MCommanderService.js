import http from "../http-common";

class MCommanderService {
  getAll() {
    return http.get("/mcommander");
  }
  get(id) {
    return http.get(`/mcommander/${id}`);
  }
  create(data) {
    return http.post("/mcommander", data);
  }
  update(id, data) {
    return http.put(`/mcommander/${id}`, data);
  }
  delete(id) {
    return http.delete(`/mcommander/${id}`);
  }
}

export default new MCommanderService();