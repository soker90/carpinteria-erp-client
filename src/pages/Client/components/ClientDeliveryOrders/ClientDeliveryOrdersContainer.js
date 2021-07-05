import { connect } from 'react-redux';

import { getDeliveryOrders } from '../../modules/actions';
import ClientDeliveryOrders from './ClientDeliveryOrders';

const mapStateToProps = ({ client: { deliveryOrders } }) => deliveryOrders;

const mapDispatchToProps = {
  getDeliveryOrders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientDeliveryOrders);
