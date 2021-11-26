import Services from './Services';
// import jwtDecode from 'jwt-decode';
class UserService extends Services {
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post('user/login', {email, password})
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          console.log(err + ' error');

          reject(err);
        });
    });

  register = data => this.post('user/register', data);
}

let userService = new UserService();
export default userService;
