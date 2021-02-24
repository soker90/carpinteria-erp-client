import { connect } from 'react-redux';

import ClientDeliveryOrders from './ClientDeliveryOrders';

const mapStateToProps = ({ client: { deliveryOrders } }) => deliveryOrders;

const mapDispatchToProps = {
  getClientDeliveryOrders: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientDeliveryOrders);
