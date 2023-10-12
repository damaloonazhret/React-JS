import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f2059e91-379b-4bab-82a6-ba98c8e84db1'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`)
    },
    postUsers(id) {
        return instance.post(`follow/${id}`)
    }
}
