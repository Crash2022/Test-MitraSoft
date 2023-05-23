import {put} from 'redux-saga/effects'
import {appSetErrorAC, appSetStatusAC} from '../../store/app-reducer';

// export function* handleServerAppErrorSaga<D>(data: any<D>) {
//     if (data.messages) {
//         yield put(appSetErrorAC(data.messages[0]));
//     } else {
//         yield put(appSetErrorAC('Some error occurred'));
//     }
//     yield put(appSetStatusAC('failed'));
// }

export function* handleServerNetworkErrorSaga(error: { message: string }) {
    yield put(appSetErrorAC(error.message ? error.message : 'Some error occurred'));
    yield put(appSetStatusAC('failed'));
}
