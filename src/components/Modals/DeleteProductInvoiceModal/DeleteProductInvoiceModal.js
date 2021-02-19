import { memo } from 'react';
import PropTypes from 'prop-types';
import { ConfirmModal } from 'components/Modals';

const DeleteProductInvoiceModal = ({
  action, id, ...rest
}) => {
  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    action(id);
    rest.close();
  };

  return (
    <ConfirmModal
      {...rest}
      title='Quitar producto'
      description='¿Seguro que quieres quitar el producto?'
      action={_handleSend}
      actions={[
        { onClick: rest.close, value: 'Cerrar', 'data-cy': 'modal-close-button' },
        {
          onClick: _handleSend,
          color: 'secondary',
          variant: 'contained',
          value: 'Eliminar',
          'data-cy': 'modal-close-button',
        },
      ]}
    />
  );
};

DeleteProductInvoiceModal.propTypes = {
  close: PropTypes.func,
  show: PropTypes.bool,
  id: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
};

DeleteProductInvoiceModal.displayName = 'DeleteConfirmationModal';
export const story = DeleteProductInvoiceModal;
export default memo(DeleteProductInvoiceModal);
