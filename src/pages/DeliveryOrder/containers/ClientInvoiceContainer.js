import { connect } from 'react-redux';
import ClientInvoice from '../components/ClientInvoice';
import {
  createDeliveryOrder,
  deleteDOClientInvoice,
  deleteProduct,
  getClientInvoice,
  resetClientInvoiceState,
  updateDataClientInvoice,
  updateDOClientInvoice,
} from '../modules/actions';
import { getProducts } from '../../Products/modules/actions';

const mapStateToProps = ({ clientInvoice }) => clientInvoice;

const mapDispatchToProps = {
  getClientInvoice,
  resetClientInvoiceState,
  updateDataClientInvoice,
  createDeliveryOrder,
  updateDOClientInvoice,
  deleteDOClientInvoice,
  getProducts,
  deleteProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientInvoice);
