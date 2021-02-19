/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import { useParams } from 'react-router';

import { LoadingScreen, Page } from 'components';
import ProductsInvoice from 'components/ProductsInvoice';
import { useStyles } from './ClientInvoice.styles';
import ClientInvoiceCards from './ClientInvoiceCards';
import Header from './Header';

const ClientInvoice = ({
  getClientInvoice,
  _id,
  nameClient,
  client,
  resetClientInvoiceState,
  date,
  total,
  taxBase,
  iva,
  updateDataClientInvoice,
  createDeliveryOrder,
  nInvoice,
  getProducts,
  products,
}) => {
  const { idInvoice } = useParams();
  const classes = useStyles();

  useEffect(() => {
    if (idInvoice && idInvoice !== _id) getClientInvoice(idInvoice);
  }, [idInvoice]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => () => resetClientInvoiceState(), []);

  if (!_id) return <LoadingScreen />;

  return (
    <Page className={classes.root} title={`${nameClient} | Factura`}>
      <Container maxWidth={false}>
        <Header
          client={client}
          nameClient={nameClient}
          createDeliveryOrder={createDeliveryOrder}
          id={idInvoice}
          nInvoice={nInvoice}
        />

        <ProductsInvoice
          products={products}
          showDeleteProductModal={() => {

          }}
          showEditProductModal={() => {

          }}
        />

        <ClientInvoiceCards
          total={total}
          taxBase={taxBase}
          iva={iva}
          date={date}
          id={idInvoice}
          updateDataClientInvoice={updateDataClientInvoice}
          nInvoice={nInvoice}
        />
      </Container>
    </Page>
  );
};

ClientInvoice.propTypes = {
  getClientInvoice: PropTypes.func.isRequired,
  _id: PropTypes.string,
  nameClient: PropTypes.string,
  client: PropTypes.string,
  resetClientInvoiceState: PropTypes.func.isRequired,
  date: PropTypes.number,
  updateDataClientInvoice: PropTypes.func.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
  nInvoice: PropTypes.string,
  total: PropTypes.number.isRequired,
  taxBase: PropTypes.number.isRequired,
  iva: PropTypes.number.isRequired,
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

ClientInvoice.displayName = 'ClientInvoice';
export const story = ClientInvoice;
export default memo(ClientInvoice);
