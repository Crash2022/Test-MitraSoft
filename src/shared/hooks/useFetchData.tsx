import {useEffect} from "react";
import {appSetStatusAC} from "../../store/app-reducer";
import {useAppDispatch} from "./useAppDispatch";

export const useFetchData = (dispatchOne: () => void, dispatchTwo?: () => void, deps?: any) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(appSetStatusAC('loading'))

        const timer = setTimeout(() => {
            dispatchOne()
            dispatchTwo && dispatchTwo()
        }, 1000)

        return () => clearTimeout(timer)
    }, [deps && deps])
}