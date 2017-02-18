import axios from 'axios';

export const login = (data) =>  {
    return dispatch => {
        return axios.post('/api/auth', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
        });
    };
};
