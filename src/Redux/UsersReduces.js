const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://w7.pngwing.com/pngs/428/137/png-transparent-computer-icons-user-user-miscellaneous-face-head.png',
        //     followed: false,
        //     fullName: 'Andre',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://w7.pngwing.com/pngs/428/137/png-transparent-computer-icons-user-user-miscellaneous-face-head.png',
        //     followed: true,
        //     fullName: 'Andreas',
        //     status: 'I am a boss too',
        //     location: {city: 'Russia', country: 'Moscow'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://w7.pngwing.com/pngs/428/137/png-transparent-computer-icons-user-user-miscellaneous-face-head.png',
        //     followed: false,
        //     fullName: 'San Andreas',
        //     status: 'I am a boss too',
        //     location: {city: 'Germany', country: 'Belarus'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://w7.pngwing.com/pngs/428/137/png-transparent-computer-icons-user-user-miscellaneous-face-head.png',
        //     followed: true,
        //     fullName: 'Zik',
        //     status: 'I am a boss',
        //     location: {city: 'USA', country: 'Belarus'}
        // },
        ],
}

const UsersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        console.log('true')
                        return {...u, followed: true}
                    } else {
                        console.log('false')
                        console.log(u.id, action.userId)
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        console.log('true')
                        return {...u, followed: false}
                    } else {
                        console.log('false')
                    }
                    return u;
                })
            }
        case SET_USERS: {
            // return {
            //     ...state, users: [...state.users, ...action.users]
            // }
            return { ...state, users: action.users }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default UsersReducers;