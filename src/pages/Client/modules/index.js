import { createReducer, setPayload } from 'store/utils';
import { EDIT_CLIENT, GET_CLIENT, GET_CLIENT_INVOICES } from './types';

const INITIAL_STATE = {
  client: {},
  invoices: {
    invoices: [],
    count: 0,
  },
  deliveryOrders: {
    deliveryOrders: [],
    count: 0,
  },
  budgets: {
    budgets: [],
    count: 0,
  },
};

const _setClient = (state, {
  payload: {
    client,
    invoices,
    count,
  },
}) => ({
  ...state,
  client,
  invoices: {
    invoices,
    count,
  },
});

const ACTION_HANDLERS = {
  [GET_CLIENT.SET]: _setClient,
  [EDIT_CLIENT.SET]: setPayload,
  [GET_CLIENT_INVOICES.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
