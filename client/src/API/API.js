import axios from 'axios'
const API = {
 getData: function() {
    return axios.get("/data");
  }
}

export default API