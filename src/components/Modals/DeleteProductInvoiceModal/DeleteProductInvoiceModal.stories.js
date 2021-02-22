import { action } from '@storybook/addon-actions';

import { story as DeleteConfirmationModal } from './DeleteProductInvoiceModal';

export default {
  title: 'Componentes/Modales/Eliminar producto',
  parameters: {
    component: DeleteConfirmationModal,
    componentSubtitle: 'Modal de confimación para eliminar un producto de una factura',
  },
};

const DeleteModal = () => (
  <DeleteConfirmationModal
    // eslint-disable-next-line
    show={true}
    close={action('Cerrar modal')}
    deleteProductOfDeliveryOrder={action('deleteProductOfDeliveryOrder')}
    index={0}
  />
);

DeleteModal.storyName = 'Eliminar producto';

export { DeleteModal };
