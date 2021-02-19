import { connect } from 'react-redux';

import { deleteProductOfDeliveryOrder } from 'pages/DeliveryOrder/modules/actions';
import DeleteConfirmationModal from './DeleteProductInvoiceModal';

const mapDispatchToProps = {
  deleteProductOfDeliveryOrder,
};

export default connect(
  null,
  mapDispatchToProps,
)(DeleteConfirmationModal);
