import axios from 'axios'
const API = {
 getData: function(search) {
    return axios.get("/data/"+search);
 },
 addjob: function(job){
 	return axios.post("/addjob",job);
 },
 newuser: function(user){
 	return axios.post("/adduser",user);
 },
 authentification: function(email,pwd) {
    return axios.get("/"+email+"/"+pwd);
 }

}

export default API