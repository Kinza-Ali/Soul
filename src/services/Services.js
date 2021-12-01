import axios from 'axios';

axios.defaults.baseURL =
  'http://ec2-3-250-68-254.eu-west-1.compute.amazonaws.com:3000/api/';
// axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
class Services {
  get = url =>
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          if (error.request) console.log(error.request.response);
          if (error.response) console.log(error.response.response);
          reject(error);
        });
    });

  post = (url, data) =>
    new Promise((resolve, reject) => {
      // console.log(data);
      axios
        .post(url, data)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          if (error.request.response)
            console.log(JSON.parse(error.request.response).UserMessage);
          if (error.response.response)
            console.log(JSON.parse(error.response.response).UserMessage);

          reject(JSON.parse(error.request.response).UserMessage);
        });
    });

  delete = url =>
    new Promise((resolve, reject) => {
      console.log('Url ' + url);
      axios
        .delete(url)
        .then(res => {
          console.log('Successfully deleted');
          resolve(res);
        })
        .catch(error => {
          // if (error.request)
          console.log(error.request.response);
          // if (error.response)
          console.log(error.response.response);
          reject(error);
        });
    });
}

export default Services;
