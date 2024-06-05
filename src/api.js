import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com',
});

export const searchUsers = async (text) => {
    try {
        const response = await api.get(`/search/users?q=${text}`);
        return response.data.items;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const getUser = async (username) => {
    try {
        const response = await api.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

export const getUserRepos = async (username) => {
    try {
        const response = await api.get(`/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error("Error fetching repositories:", error);
        throw error;
    }
};
