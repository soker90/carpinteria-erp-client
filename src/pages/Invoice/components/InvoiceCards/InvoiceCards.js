import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import DeliveryOrderData from './components/InvoiceData/InvoiceData';
import DeliveryOrderTotals from './components/InvoiceTotals/InvoiceTotals';
import { useStyles } from './InvoiceCards.styles';

const InvoiceCards = ({ data, totals }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.cards}>
      <Grid item xs={12} md={4}>
        <DeliveryOrderData
          {...data}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <DeliveryOrderTotals {...totals} isEditable={!data.nOrder} />
      </Grid>
    </Grid>
  );
};

InvoiceCards.propTypes = {
  totals: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

InvoiceCards.displayName = 'InvoiceCards';

export default InvoiceCards;
