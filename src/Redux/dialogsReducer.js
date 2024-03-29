const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: `It's my first post`},
        {id: 3, message: 'La la la?'},
        {id: 4, message: 'Bla bla bla?'},
        {id: 5, message: 'Yooouuu'},
        {id: 5, message: 'Yoooooouuuuu'},
    ],
    // newMessageText: 'Hello',
    messagesOut: [
        {id: 1, messageOut: 'Chi da'},
        {id: 2, messageOut: 'Chi ili ne chi'},
        {id: 3, messageOut: 'Chiii da'},
        {id: 4, messageOut: 'Chi?'},
        {id: 5, messageOut: 'Chi ini ne chi?'},
        {id: 5, messageOut: 'Ti da?'},
    ],
    dialogs: [
        {
            id: 1,
            name: 'Andrey',
            src: 'https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-76.jpg'
        },
        {
            id: 2,
            name: 'Onfire',
            src: 'https://pic.rutubelist.ru/video/46/b2/46b25de0bf3d3fa60a22037e55071354.jpg'
        },
        {id: 3, name: 'John', src: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg'},
        {id: 4, name: 'Kosmodrom', src: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
        {id: 5, name: 'Duyshiy', src: 'https://cojo.ru/wp-content/uploads/2022/12/pepe-retroveiv-3.webp'},
        {id: 5, name: 'Severniy', src: 'https://vjoy.cc/wp-content/uploads/2020/03/24.jpg'},
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessage}]
            }
        default: {
            return state;
        }
    }
}

export const addMessageActionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage})

export default dialogsReducer;