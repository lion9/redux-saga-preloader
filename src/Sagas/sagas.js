import { call, put, all } from 'redux-saga/effects';

import { COMPLETE_DATA_FETCHING  } from "../Constants/action-types";
import { FETCH_SUCCEEDED  } from "../Constants/action-types";
import fetchData from '../API/api';

const delay = (ms) => new Promise(res => setTimeout(res, ms));


export default function* rootSaga() {
    yield all([
        getApiData()
    ])
}

export function* getApiData(action) {
    try {
        const data = yield call(fetchData);
        yield delay(3000);
        yield put({type: FETCH_SUCCEEDED, data});
        yield put({ type: COMPLETE_DATA_FETCHING });
    } catch (error) {
        console.log(error);
    }
}
