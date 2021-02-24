import { connect } from 'react-redux';

import { getClientInvoices } from '../../modules/actions';
import ClientInvoices from './ClientInvoices';

const mapStateToProps = ({ client: { invoices } }) => invoices;

const mapDispatchToProps = {
  getClientInvoices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientInvoices);
