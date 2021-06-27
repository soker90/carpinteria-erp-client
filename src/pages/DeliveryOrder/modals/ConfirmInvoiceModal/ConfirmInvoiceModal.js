import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ConfirmModal } from 'components/Modals';

const ConfirmInvoiceModal = ({
  confirmInvoice,
  id,
  setShow,
  ...rest
}) => {
  const _close = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const _handleSend = () => {
    confirmInvoice(id, _close);
    _close();
  };

  return (
    <ConfirmModal
      {...rest}
      close={_close}
      title='Asignar número'
      description='Se asignará un número de albarán'
      action={_handleSend}
      actions={[
        {
          onClick: _close,
          value: 'Cerrar',
        },
        {
          color: 'primary',
          onClick: _handleSend,
          variant: 'contained',
          value: 'Asignar',
        },
      ]}
    />
  );
};

ConfirmInvoiceModal.propTypes = {
  setShow: PropTypes.func,
  id: PropTypes.string.isRequired,
  confirmInvoice: PropTypes.func.isRequired,
};

ConfirmInvoiceModal.displayName = 'ConfirmInvoiceModal';
export const story = ConfirmInvoiceModal;
export default memo(ConfirmInvoiceModal);
