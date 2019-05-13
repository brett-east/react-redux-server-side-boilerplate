import { takeLatest } from 'redux-saga/effects';

import { fetchUsers } from './fetchUsers.saga';

function* sagas() {
  yield takeLatest('USERS_FETCH', fetchUsers);
}

export default sagas;
