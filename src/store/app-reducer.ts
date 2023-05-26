// reducer
export type AppInitialStateStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type AppInitialStateType = {
    status: AppInitialStateStatusType
    localStatus: AppInitialStateStatusType
}

const initialState: AppInitialStateType = {
    status: 'idle',
    localStatus: 'idle',
}

export const appReducer = (state: AppInitialStateType = initialState,
                           action: ApplicationActionTypes): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'APP/SET_LOCAL_STATUS': {
            return {...state, localStatus: action.status}
        }
        default:
            return {...state}
    }
}

/*-----------------------------------------------------------------------------------*/

// actions
export type ApplicationActionTypes =
    AppSetStatusACType |
    AppSetLocalStatusACType //| AppSetErrorACType

export type AppSetStatusACType = ReturnType<typeof appSetStatusAC>
export const appSetStatusAC = (status: AppInitialStateStatusType) => ({
    type: 'APP/SET_STATUS', status
} as const)

export type AppSetLocalStatusACType = ReturnType<typeof appSetLocalStatusAC>
export const appSetLocalStatusAC = (status: AppInitialStateStatusType) => ({
    type: 'APP/SET_LOCAL_STATUS', status
} as const)