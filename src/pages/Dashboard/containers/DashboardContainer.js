import { connect } from 'react-redux';

import { createReminder, deleteReminder, getDashboard } from '../modules/actions';
import DashboardView from '../components/DashboardView';

const mapStateToProps = ({ dashboard }) => dashboard;

const mapDispatchToProps = {
  createReminder,
  deleteReminder,
  getDashboard,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardView);
