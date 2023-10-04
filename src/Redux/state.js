let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', messageOut: 'Chi da'},
            {id: 2, message: `It's my first post`, messageOut: 'Chi ili ne chi'},
            {id: 3, message: 'La la la?', messageOut: 'Chiii da'},
            {id: 4, message: 'Bla bla bla?', messageOut: 'Chi?'},
            {id: 5, message: 'Yooouuu', messageOut: 'Chi ini ne chi da?'},
            {id: 5, message: 'Yoooooouuuuu', messageOut: 'Chi da'},
        ],
        dialogs: [
            {id: 1, name: 'Andrey', src: 'https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-76.jpg'},
            {id: 2, name: 'Onfire', src: 'https://pic.rutubelist.ru/video/46/b2/46b25de0bf3d3fa60a22037e55071354.jpg'},
            {id: 3, name: 'John', src: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg'},
            {id: 4, name: 'Kosmodrom', src: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg'},
            {id: 5, name: 'Duyshiy', src: 'https://cojo.ru/wp-content/uploads/2022/12/pepe-retroveiv-3.webp'},
            {id: 5, name: 'Severniy', src: 'https://vjoy.cc/wp-content/uploads/2020/03/24.jpg'},
        ],
    },
    dialogPage: {
        messages: [
            {id: 1, message: 'Hi', like: 18},
            {id: 2, message: 'How are you?', like: 11},
            {id: 3, message: 'John', like: 12},
            {id: 4, message: 'Yo', like: 13},
            {id: 5, message: 'Yooo', like: 14},
            {id: 5, message: 'Yoooooo', like: 12},
        ],
    },
}

export let addPost = (postMessage) => {
    debugger
    const newPost = {
        id: 6,
        message: postMessage,
        like: 3,
    };

    state.dialogPage.messages.push(newPost);
}

export default state;