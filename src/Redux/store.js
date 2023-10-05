// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import navbarFriendsReducer from "./navbarFriendsReducer";
//
// let store = {
//     _state: {
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hi, how are you?'},
//                 {id: 2, message: `It's my first post`},
//                 {id: 3, message: 'La la la?'},
//                 {id: 4, message: 'Bla bla bla?'},
//                 {id: 5, message: 'Yooouuu'},
//                 {id: 5, message: 'Yoooooouuuuu'},
//             ],
//             newMessageText: 'Hello',
//             messagesOut: [
//                 {id: 1, messageOut: 'Chi da'},
//                 {id: 2, messageOut: 'Chi ili ne chi'},
//                 {id: 3, messageOut: 'Chiii da'},
//                 {id: 4, messageOut: 'Chi?'},
//                 {id: 5, messageOut: 'Chi ini ne chi?'},
//                 {id: 5, messageOut: 'Ti da?'},
//             ],
//             dialogs: [
//                 {
//                     id: 1,
//                     name: 'Andrey',
//                     src: 'https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-76.jpg'
//                 },
//                 {
//                     id: 2,
//                     name: 'Onfire',
//                     src: 'https://pic.rutubelist.ru/video/46/b2/46b25de0bf3d3fa60a22037e55071354.jpg'
//                 },
//                 {id: 3, name: 'John', src: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg'},
//                 {id: 4, name: 'Kosmodrom', src: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
//                 {id: 5, name: 'Duyshiy', src: 'https://cojo.ru/wp-content/uploads/2022/12/pepe-retroveiv-3.webp'},
//                 {id: 5, name: 'Severniy', src: 'https://vjoy.cc/wp-content/uploads/2020/03/24.jpg'},
//             ],
//         },
//         navbarFriends: {
//             bestFriends: [
//                 {
//                     id: 1,
//                     name: 'Andrey',
//                     src: 'https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-76.jpg'
//                 },
//                 {
//                     id: 2,
//                     name: 'Onfire',
//                     src: 'https://pic.rutubelist.ru/video/46/b2/46b25de0bf3d3fa60a22037e55071354.jpg'
//                 },
//                 {
//                     id: 3,
//                     name: 'John',
//                     src: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg'
//                 },
//             ]
//         },
//         profilePage: {
//             messages: [
//                 {id: 1, message: 'Hi', like: 18},
//                 {id: 2, message: 'How are you?', like: 11},
//                 {id: 3, message: 'John', like: 12},
//                 {id: 4, message: 'Yo', like: 13},
//                 {id: 5, message: 'Yooo', like: 14},
//                 {id: 5, message: 'Yoooooo', like: 12},
//             ],
//             newPostText: 'Hello World',
//         },
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.navbarFriends = navbarFriendsReducer(this._state.navbarFriends, action);
//         this._callSubscriber(this._state);
//     }
// }
//
// window.state = store;
//
// export default store;