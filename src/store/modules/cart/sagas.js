import { Alert } from 'react-native';
import { call, put, all, select, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/formatPrice';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) => {
    return state.cart.find((product) => product.id === id);
  });

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const newAmount = currentAmount + 1;

  if (newAmount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, newAmount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
