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
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    // getProfile(userId) {
    // console.warn('Obsolete method. Please profileAPI object.')
    // return profileAPI.getProfile(userId) способ перейти на новый методне сломав ничего
    // }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(r => r.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    }
}

export const headerAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(r => r);
    },
    loginMe(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(r => r);
    },
    logout(email, password, rememberMe = false) {
        return instance.delete(`auth/login`)
            .then(r => r);
    },
}
