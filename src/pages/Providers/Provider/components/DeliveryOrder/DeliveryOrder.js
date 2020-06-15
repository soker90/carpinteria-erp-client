import React, {
  lazy, memo, Suspense, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';

import NoInvoices from './components/NoInvoices';
import { useStyles } from './DeliveryOrder.styles';

const InInvoices = lazy(() => import('./components/InInvoices'));

const DeliveryOrder = ({
  free, inInvoices, getDeliveryOrders, idProvider,
}) => {
  const classes = useStyles();
  const [showInInvoices, setShowInInvoices] = useState(true);

  useEffect(() => {
    getDeliveryOrders(idProvider);
  }, [getDeliveryOrders, idProvider]);

  return (
    idProvider
    && (
      <>
        <NoInvoices deliveryOrders={free} />
        {showInInvoices
        && (
          <Suspense fallback={<LinearProgress />}>
            <InInvoices deliveryOrders={inInvoices} />
          </Suspense>
        )}
      </>
    )
  );
};

DeliveryOrder.propTypes = {
  free: PropTypes.array.isRequired,
  inInvoices: PropTypes.shape({
    data: PropTypes.array,
    count: PropTypes.number,
  }),
  idProvider: PropTypes.string,
  getDeliveryOrders: PropTypes.func.isRequired,
};

DeliveryOrder.displayName = 'DeliveryOrder';

export default memo(DeliveryOrder);