import axios from 'axios';

const API_URL = 'https://recipessaitynai.herokuapp.com/api/auth/';

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

    signin(user) {
        return axios.post(API_URL + 'signin', {
            username: user.username,
            password: user.password
        });
    }
}

export default new AuthService();