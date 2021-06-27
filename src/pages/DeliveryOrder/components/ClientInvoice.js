/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useParams } from 'react-router';

import {
  LoadingScreen, Page, DeleteProductInvoiceModal, ProductsInvoice,
} from 'components';
import ProductOrderModal from '../modals/ProductOrderModal/ProductOrderModalContainer';
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
  deleteProduct,
}) => {
  const { idInvoice } = useParams();
  const [deleteId, setDeleteId] = useState(undefined);
  const [editId, setEditId] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (idInvoice && idInvoice !== _id) getClientInvoice(idInvoice);
  }, [idInvoice]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => () => resetClientInvoiceState(), []);

  const _closeDeleteModal = useCallback(() => {
    setDeleteId(undefined);
  }, []);

  const showModalDelete = useCallback(product => {
    setDeleteId(product);
  }, []);

  const _closeEditModal = useCallback(() => {
    setEditId(false);
  }, []);

  const showEditModal = useCallback(product => {
    setEditId(product);
  }, []);

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
          showDeleteProductModal={showModalDelete}
          showEditProductModal={showEditModal}
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
      <DeleteProductInvoiceModal
        close={_closeDeleteModal}
        id={_id}
        product={deleteId}
        action={deleteProduct}
      />
      <ProductOrderModal
        invoice={_id}
        show={editId}
        close={_closeEditModal}
      />
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
  deleteProduct: PropTypes.func.isRequired,
};

ClientInvoice.displayName = 'ClientInvoice';
export const story = ClientInvoice;
export default memo(ClientInvoice);
