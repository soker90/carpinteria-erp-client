import axios from 'axios';
import history from 'store/history';
import { CREATE_DELIVERY_ORDER } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _createDeliveryOrderRequest = () => ({ type: CREATE_DELIVERY_ORDER.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _createDeliveryOrderSuccess = () => ({
  type: CREATE_DELIVERY_ORDER.SUCCESS,
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _createDeliveryOrderError.props}}
 * @private
 */
const _createDeliveryOrderError = error => ({
  type: CREATE_DELIVERY_ORDER.FAILURE,
  error,
});

/**
 * Crear factura de cliente
 * @param {String} id
 */
export const createDeliveryOrder = id => async dispatch => {
  dispatch(_createDeliveryOrderRequest());

  try {
    const { data } = await axios.post('deliveryorders', { client: id });

    dispatch(_createDeliveryOrderSuccess());
    history.push(`/app/clientes/albaran/${data.id}`);
  } catch (error) {
    dispatch(_createDeliveryOrderError(error));
  }
};
