import React, { useContext, useState, useEffect } from 'react';
import axios from 'src/utils/axiosBackend';

import _ from 'lodash';

const AuthContext = React.createContext({
    isAuthenticated: false
});

export function useAuth() {
    return useContext(AuthContext)
}

export default function Provider(props) {

    const [isLoading, setLoading] = useState(false);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState();
    const [user, setUser] = useState();


    useEffect(() => {
        getProfile();
    }, [])

    const getProfile = async function () {
        try {
            setLoading(true)
            const token = localStorage.getItem('token');
            if (token) {
                const profile = await axios.get('/user/profile', {
                    headers: {
                        Authorization: token
                    }
                })
                console.log("Authentication - user is authenticated")
                console.log(profile.data.data);
                setToken(token);
                setUser(profile.data.data);
                setAuthenticated(true);
            }
        } catch (e) {
            localStorage.clear();
            console.log(e);
        } finally {
            setLoading(false)
        }
    }


    const login = async function ({ email, password }) {
        try {
            const response = await axios.post('/user/login', { email, password });
            const { user, token } = response.data.data;
            localStorage.setItem('token', token);
            setUser(user);
            setToken(token);
            setAuthenticated(true);
            console.log('Auth success - user is logged in');
            return {
                status: "LOGIN_SUCCESS",
                user: user
            }
        } catch (e) {
            const error = new Error();
            switch (e.response.status) {
                case 403:
                    error.code = "UNVERIFIED_EMAIL";
                    break;
                case 401:
                    error.code = "WRONG_COMBINATION";
                    break;
                case 404:
                    error
                    error.code = "USER NOT EXIST";
                case 500:
                    error.code = "SERVER_ERROR";
                    break;
                default:
            }

            return error;
        }
    }

    const register = async function ({ email, password }) {
        try {
            const response = await axios.post('/user/register', { email, password });
            return {
                status: "REGISTER_SUCCESS",
                user: response
            }
        } catch (e) {
            const error = new Error();

            if (e.response) {
                switch (e.response.status) {
                    case 409:
                        error.message = "user email already exists";
                        error.code = "USER_EXISTS"
                        break;
                    case 500:
                        error.message = "server error had occured";
                        error.code = "SERVER_ERROR"
                        break;
                }
            }

            throw error;
        }
    }

    const verifyEmail = async function ({ email, code }) {
        try {
            const response = await axios.post('user/validate-email', { email, code });
            return {
                status: 'EMAIL_VERIFIED_SUCCESSFULLY',
                user: user
            }
        } catch (e) {
            switch (e.response.status) {
                case 409:
                    return {
                        status: "EMAIL_ALREADY_VERIFIED"
                    }
                    break;
                default: {
                    return {
                        status: "EMAIL_VERIFCATION_FAILED"
                    }
                }
            }
        }
    }

    const logout = function () {

    }


    return (
        <AuthContext.Provider value={{ register, login, logout, verifyEmail, user, token, isLoading, isAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    )
}
