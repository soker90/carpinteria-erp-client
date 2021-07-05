import axios from 'axios';
import { objectToParams } from 'utils';
import { GET_DELIVERY_ORDERS } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getDeliveryOrdersRequest = () => ({ type: GET_DELIVERY_ORDERS.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getDeliveryOrdersSuccess = () => ({
  type: GET_DELIVERY_ORDERS.SUCCESS,
});

/**
 * Set action
 * @param {Object} client
 * @return {{payload: {provider: Object, billing: Object}, type: string}}
 * @private
 */
const _getDeliveryOrdersSet = deliveryOrders => ({
  type: GET_DELIVERY_ORDERS.SET,
  payload: { deliveryOrders },
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getDeliveryOrdersError.props}}
 * @private
 */
const _getDeliveryOrdersError = error => ({
  type: GET_DELIVERY_ORDERS.FAILURE,
  error,
});

/**
 * Trae los clientes
 * @returns {function(...[*]=)}
 */
export const getDeliveryOrders = filters => async dispatch => {
  dispatch(_getDeliveryOrdersRequest());

  try {
    const { data } = await axios(`deliveryOrders/short${objectToParams(filters)}`);

    dispatch(_getDeliveryOrdersSuccess());
    dispatch(_getDeliveryOrdersSet(data));
  } catch (error) {
    dispatch(_getDeliveryOrdersError(error));
  }
};
