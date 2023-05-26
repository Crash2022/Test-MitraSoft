import {AppInitialStateType, appReducer, appSetStatusAC,} from "./app-reducer";

let startState: AppInitialStateType;

beforeEach(() => {
    startState = {
        status: 'idle',
        localStatus: 'idle'
    }
})

test('app status should be changed', () => {
    const endTasksState = appReducer(startState, appSetStatusAC('loading'))
    expect(endTasksState.status).toBe('loading')
})