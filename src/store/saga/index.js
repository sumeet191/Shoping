import { fork, all } from 'redux-saga/effects';
import { map, unary } from 'lodash/fp';
import prdouctSaga from '../../components/products/saga'

export default function* () {
  const _sagas = [
    prdouctSaga
  ];
  yield all(map(unary(fork), _sagas));
}
