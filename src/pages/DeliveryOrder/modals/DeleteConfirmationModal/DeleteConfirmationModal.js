import { memo } from 'react';
import PropTypes from 'prop-types';

import { ConfirmModal } from 'components';

const DeleteConfirmationModal = ({
  action, id, product, ...rest
}) => {
  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    action(id, product);
    rest.close();
  };

  return (
    <ConfirmModal
      {...rest}
      title='Eliminar producto del albarán'
      description='¿Seguro que quieres quitar el producto del albarán?'
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

DeleteConfirmationModal.propTypes = {
  close: PropTypes.func,
  show: PropTypes.bool,
  product: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

DeleteConfirmationModal.displayName = 'DeleteConfirmationModal';
export const story = DeleteConfirmationModal;
export default memo(DeleteConfirmationModal);
