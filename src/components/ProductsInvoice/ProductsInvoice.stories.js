import { action } from '@storybook/addon-actions';
import RoutesWrapper from 'story/RoutesWrapper';
import { story as ProductsInvoice } from './ProductsInvoice';

export default {
  title: 'Componentes/Productos factura',
  parameters: {
    component: ProductsInvoice,
    componentSubtitle: 'Tabla de productos',
  },
  decorators: [storyFn => (
    <RoutesWrapper>
      {storyFn()}
    </RoutesWrapper>
  ),
  ],
};

const ProductsInvoiceStory = () => (
  <ProductsInvoice
    products={[
      {
        code: '2345',
        name: 'Pollo',
        quantity: 6.6,
        price: 1.3,
        taxBase: 15,
        diff: -1.2,
      },
      {
        code: '1111',
        name: 'Lentejas',
        quantity: 2,
        price: 3.3,
        taxBase: 1,
        diff: 6.35,
      },
      {
        code: '6846',
        name: 'Pan',
        quantity: 2,
        price: 0.5,
        taxBase: 1,
        diff: 0,
      },
    ]}
    updatePrice={action('updatePrice')}
    showEditProductModal={action('showEditProductModal')}
    showDeleteProductModal={action('showDeleteProductModal')}
    isEditable
    hasCanal={false}
  />
);

ProductsInvoiceStory.storyName = 'Productos';

export { ProductsInvoiceStory };
