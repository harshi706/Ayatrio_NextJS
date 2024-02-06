// sagas/index.js
import { all } from "redux-saga/effects";
import { watchFetchRecommendedProduct } from "./recommendationSaga";
import { watchFetchSliderView } from "./sliderSaga";
import { watchSearchProducts } from "./searchSaga";
import { watchFetchFirstCard } from "./FirstCardSaga";
import { watchSelectedItemsSaga } from "./selectedItemsSaga";
import { watchFetchProfileData } from "./profileSaga";
import { watchFetchRoomData } from "./roomSaga";
import { cartSaga } from "./cartSaga";
import { watchSelectedProductsSaga } from "./compareSaga";
import { watchVirtualGet } from "./virtualSaga";
import {watchMultiCardData} from './multiCardSaga';
export default function* rootSaga() {
  yield all([
    watchFetchRecommendedProduct(),
    watchFetchSliderView(),
    watchSearchProducts(),
    watchFetchFirstCard(),
    watchFetchProfileData(),
    watchFetchRoomData(),
    watchSelectedItemsSaga(),
    cartSaga(),
    watchVirtualGet(), 
    watchSelectedProductsSaga(),
    watchMultiCardData()
  ]);
}
