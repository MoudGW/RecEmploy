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
 },
 upload: function(file){
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", `codeinfuse, medium, gist`);
    formData.append("upload_preset", "ejqnqab8");
    formData.append("api_key", "777292621975837"); 
    formData.append("timestamp", (Date.now() / 1000) | 0);
    return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData)
}, uploadVideo: function(file){
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ejqnqab8");
    formData.append("api_key", "777292621975837"); 
    formData.append("timestamp", (Date.now() / 1000) | 0);
    return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/video/upload", formData)
},
getjobid: function(id) {
    return axios.get("/"+id);
},
addapli: function(appli)
{
    return axios.post('/addApli',appli);
},
findbyrecruiter: function(recruiter)
{
    return axios.get('/job/'+recruiter);
},
getAplication: function()
{
    return axios.get('/all');
}
}

export default API
export function captureUserMedia(callback) {
  var params = { audio: true, video: true };

  navigator.getUserMedia(params, callback, (error) => {
    alert(JSON.stringify(error));
  });
};