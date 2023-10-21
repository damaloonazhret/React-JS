import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

test('length of messages should be incremented', () => {
    let action = addPostActionCreator('Hello world')
    let initialStateD = {
        messages: [
            {id: 1, message: 'Hia', like: 18},
            {id: 2, message: 'How are you?', like: 11},
            {id: 3, message: 'John', like: 12},
            {id: 4, message: 'Yo', like: 13},
            {id: 5, message: 'Yooo', like: 14},
            {id: 5, message: 'Yoooooo', like: 12},
        ],
    }
    const newState = profileReducer(initialStateD, action)

    expect(newState.messages.length).toBe(7)
});



test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let initialStateD = {
        messages: [
            {id: 1, message: 'Hia', like: 18},
            {id: 2, message: 'How are you?', like: 11},
            {id: 3, message: 'John', like: 12},
            {id: 4, message: 'Yo', like: 13},
            {id: 5, message: 'Yooo', like: 14},
            {id: 5, message: 'Yoooooo', like: 12},
        ],
    }

    const newState = profileReducer(initialStateD, action)
    expect(newState.messages.length).toBe(5)
});
