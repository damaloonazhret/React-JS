let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 18},
            {id: 2, message: `It's my first post`, like: 11},
            {id: 3, message: 'La la la?', like: 12},
            {id: 4, message: 'Bla bla bla?', like: 13},
            {id: 5, message: 'Yooouuu', like: 14},
            {id: 5, message: 'Yoooooouuuuu', like: 12},
        ],
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Onfire'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Kosmodrom'},
            {id: 5, name: 'Duyshiy'},
            {id: 5, name: 'Severniy'},
        ],
    },
    dialogPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'John'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yooo'},
            {id: 5, message: 'Yoooooo'},
        ],
    },
}

export default state;