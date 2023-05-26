import {CommentsInitialStateType, commentsReducer, setPostCommentsAC} from './comments-reducer';

let startState: CommentsInitialStateType

beforeEach(() => {
    startState = ({
        1: [ {userId: 1, id: 1, name: 'name1', email: 'email1', body: 'body1'} ],
        2: [ {userId: 1, id: 2, name: 'name2', email: 'email2', body: 'body2'} ]
    })
})

test('comments should be added to correct post', () => {
    const action = setPostCommentsAC(1, startState[1])
    const endState = commentsReducer({ 1: [], 2: [] }, action)

    expect(endState[1].length).toBe(1)
    expect(endState[2].length).toBe(0)
})