import axios from 'axios'
const API = {
 getData: function(id) {
    return axios.get("/data/"+id);
  }
}

export default API