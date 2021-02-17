/* eslint-disable react/prop-types */
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { memo } from 'react';
import PropTypes from 'prop-types';

import { TableMaterial, TextEuro } from 'components';
import { format } from 'utils';
import { useStyles } from './ProductsInvoice.styles';

const ProductsInvoice = ({
  products,
  showDeleteProductModal,
  showEditProductModal,
}) => {
  const classes = useStyles();
  // const productsClients = useSelector(({ productsClients: pc }) => pc.products);

  /**
   * Muesta el modal de confirmación para borrar el elemento
   * @param {Number} index
   * @private
   */
  const _showDeleteProductModal = (row, index) => {
    showDeleteProductModal(index);
  };

  /**
   * Muesta el modal para editar el producto añadido
   * @param {Object} row
   * @param {Number} index
   * @private
   */
  const _showEditProductModal = (row, index) => {
    showEditProductModal(row, index);
  };

  return (
    <TableMaterial
      className={classes.root}
      columns={[
        {
          title: 'Producto',
          field: 'name',
        },
        {
          title: 'Unidades',
          render: ({ unit }) => format.number(unit),
        },
        {
          title: 'Precio',
          render: ({ price }) => <TextEuro num={price} decimals={3} />,
        },
        {
          title: 'Total',
          render: ({ total }) => <TextEuro num={total} />,
        },
      ]}
      data={products}
      actions={[
        {
          icon: EditIcon,
          tooltip: 'Editar',
          onClick: _showEditProductModal,
        },
        {
          icon: DeleteIcon,
          tooltip: 'Eliminar',
          onClick: _showDeleteProductModal,
        },
      ]}
    />
  );
};

ProductsInvoice.propTypes = {
  products: PropTypes.array.isRequired,
  showDeleteProductModal: PropTypes.func.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
};

ProductsInvoice.displayName = 'ProductsInvoice';
export const story = ProductsInvoice;
export default memo(ProductsInvoice);
