import axios from 'axios';

const API_URL = 'https://back-end-recipessite.herokuapp.com/api/auth/';

class AuthService {
    login(user) {
        return axios.post(API_URL + 'signin', {
            username: user.username,
            password: user.password
        }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
    }

    signup(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();