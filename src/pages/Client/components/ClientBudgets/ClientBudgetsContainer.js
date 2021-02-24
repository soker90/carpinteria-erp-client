import { connect } from 'react-redux';

import ClientBudgets from './ClientBudgets';

const mapStateToProps = ({ client: { budgets } }) => budgets;

const mapDispatchToProps = {
  getClientBudgets: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientBudgets);
