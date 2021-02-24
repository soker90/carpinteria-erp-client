import { memo } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

import { LoadingScreen, TableMaterial, TextEuro } from 'components';
import { BASE_PATH } from 'constants/index';
import { format } from 'utils';

const ClientDeliveryOrders = ({
  deliveryOrders, idClient, count, getClientDeliveryOrders,
}) => {
  if (!idClient) return <LoadingScreen />;

  return idClient && (
    <TableMaterial
      columns={[
        {
          title: 'Fecha',
          field: 'date',
          render: ({ date }) => format.date(date),
        },
        {
          title: 'Nº de factura',
          field: 'nInvoice',
        },
        {
          title: 'Importe',
          // eslint-disable-next-line react/prop-types
          render: ({ total }) => <TextEuro num={total} />,
        },
      ]}
      data={deliveryOrders}
      actions={[
        {
          icon: EditIcon,
          tooltip: 'Editar',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/clientes/factura/${_id}`,
        },
      ]}
      count={count}
      refresh={({ offset, limit }) => {
        getClientDeliveryOrders(idClient, offset, limit);
      }}
    />
  );
};

ClientDeliveryOrders.propTypes = {
  deliveryOrders: PropTypes.array.isRequired,
  idClient: PropTypes.string,
  count: PropTypes.number.isRequired,
  getClientDeliveryOrders: PropTypes.func.isRequired,
};

ClientDeliveryOrders.displayName = 'ProviderInvoices';

export default memo(ClientDeliveryOrders);
