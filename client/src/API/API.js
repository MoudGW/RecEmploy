import axios from 'axios'
const API = {
 getData: function(id) {
    return axios.get("/data/"+id);
  },
 addjob: function(job){
 	return axios.post("/addjob",job);
 }
}

export default API