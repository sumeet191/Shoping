import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from './action';
import api from '../../utils/api';
import {
 GET_LIST_REQUEST
} from './constants';

function* getProductList() {
    try{
        const res = yield call(api.get, 'products');
        if(res.status===200){
            const list=res.data.map(item=>{return{
                ...item,
                quantity:0
            }})
            yield put(actions.getProductSuccess(list))
        }else{
             yield put(actions.getProductError())
        }
    }catch(e){
        yield put(actions.getProductError())
        console.warn('unable to fetch');
    }
}
export default function* () {
  yield takeLatest(GET_LIST_REQUEST, getProductList);
}
