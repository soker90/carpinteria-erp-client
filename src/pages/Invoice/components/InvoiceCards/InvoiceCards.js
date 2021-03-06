/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';

import InvoiceData from './components/InvoiceData';
import InvoiceTotals from './components/InvoiceTotals';
import InvoicePayment from './components/InvoicePayment';
import { useStyles } from './InvoiceCards.styles';

const InvoiceCards = ({
  data, totals, payment, id,
}) => {
  const classes = useStyles();

  return (
    <>
      <InvoiceData {...data} className={classes.data} id={id} />
      <InvoiceTotals {...totals} className={classes.totals} />
      {payment && <InvoicePayment {...payment} className={classes.data} />}
    </>
  );
};

InvoiceCards.propTypes = {
  totals: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  payment: PropTypes.object,
  id: PropTypes.string.isRequired,
};

InvoiceCards.displayName = 'InvoiceCards';

export default InvoiceCards;
