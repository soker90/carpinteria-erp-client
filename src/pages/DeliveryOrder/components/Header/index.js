import { useCallback, useState } from 'react';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import PropTypes from 'prop-types';
import GetAppIcon from '@material-ui/icons/GetApp';
import { PlusCircle as PlusCircleIcon, Trash2 } from 'react-feather';

import { Header } from 'components';
import { downloadFile } from 'utils';
import ConfirmInvoiceModal from '../../modals/ConfirmInvoiceModal';
import DeleteInvoiceModal from '../../modals/DeleteInvoiceModal';
import ProductOrderModal from '../../modals/ProductOrderModal/ProductOrderModalContainer';

const HeaderClientInvoice = ({
  client,
  nameClient,
  nInvoice,
  id,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const _handleClickDownload = () => () => downloadFile(
    `client/invoices/export/${id}`,
    `Factura ${nInvoice} - ${nameClient}.ods`,
  );

  const _handleClickNewProduct = () => {
    setShowAddProduct(true);
  };

  const _closeNewProduct = useCallback(() => {
    setShowAddProduct(false);
  }, []);

  return (
    <>
      <Header
        routes={[{
          link: '/app/clientes',
          title: 'Clientes',
        }, {
          link: `/app/clientes/${client}`,
          title: `${nameClient}`,
        },
        ]}
        title='Albarán'
        description=''
        buttons={[{
          onClick: _handleClickDownload(),
          color: 'primary',
          Icon: GetAppIcon,
          label: 'Descargar',
          variant: 'contained',
        }, {
          variant: 'outlined',
          color: 'default',
          onClick: () => setShowDeleteModal(true),
          Icon: Trash2,
          label: 'Eliminar',
        }, {
          variant: 'contained',
          color: 'secondary',
          onClick: () => setShowConfirmModal(true),
          Icon: CheckCircleOutlinedIcon,
          disableSvg: true,
          label: 'Asinar número',
          disabled: Boolean(nInvoice),
        }, {
          variant: 'contained',
          color: 'primary',
          onClick: _handleClickNewProduct,
          Icon: PlusCircleIcon,
          disableSvg: true,
          label: 'Nuevo producto',
        }]}
      />
      <ConfirmInvoiceModal show={showConfirmModal} setShow={setShowConfirmModal} />
      <DeleteInvoiceModal show={showDeleteModal} setShow={setShowDeleteModal} />
      <ProductOrderModal
        invoice={id}
        show={showAddProduct}
        close={_closeNewProduct}
      />
    </>
  );
};

HeaderClientInvoice.propTypes = {
  nameClient: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  nInvoice: PropTypes.string,
  id: PropTypes.string,
};

HeaderClientInvoice.displayName = 'HeaderClientInvoice';

export default HeaderClientInvoice;
