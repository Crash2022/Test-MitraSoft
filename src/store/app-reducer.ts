// reducer
export type AppInitialStateType = {
    status: AppInitialStateStatusType
    error: string | null
}
export type AppInitialStateStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

const initialState: AppInitialStateType = {
    status: 'idle',
    error: null
}

export const appReducer = (state: AppInitialStateType = initialState,
                           action: ApplicationActionTypes): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS': {
            return {...state, status: action.status};
        }
        case 'APP/SET_ERROR': {
            return {...state, error: action.error};
        }
        default:
            return {...state};
    }
}

/*-----------------------------------------------------------------------------------*/

// actions
export type ApplicationActionTypes =
    AppSetStatusACType |
    AppSetErrorACType

export type AppSetStatusACType = ReturnType<typeof appSetStatusAC>
export const appSetStatusAC = (status: AppInitialStateStatusType) => ({
    type: 'APP/SET_STATUS', status
} as const)

export type AppSetErrorACType = ReturnType<typeof appSetErrorAC>
export const appSetErrorAC = (error: string | null) => ({
    type: 'APP/SET_ERROR', error
} as const)