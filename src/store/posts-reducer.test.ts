import {PostType} from "../shared/types/types";
import {PostsInitialStateType, postsReducer, setPostsAC} from './posts-reducer';

let startState: PostsInitialStateType

beforeEach(() => {
    startState = {
        allPosts: [
            { userId: 1, id: 1, title: 'New post 1', body: 'This is my first post' }
        ],
        userProfile: {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        },
        userPosts: [] as PostType[]
    }
})

test('posts should be added to initial state array', () => {

    const actionArray = [{ userId: 3, id: 1, title: 'New post 3', body: 'This is my third post' }]
    const endState = postsReducer(startState, setPostsAC(actionArray))

    expect(endState.allPosts.length).toBe(1)
    expect(endState.allPosts[0].title).toBe('New post 3')
})

// export default {}