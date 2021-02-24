import AddIcon from '@material-ui/icons/Add';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { TABS } from '../../constants';

/**
 * Buttons for header
 * @private
 */
export const getButtons = ({
  _handleClickNewBudget,
  _handleClickNewInvoice,
  _handleClickNewDeliveryOrder,
  currentTab,
}) => ({
  [TABS.INVOICES]: [{
    variant: 'contained',
    onClick: _handleClickNewInvoice,
    Icon: PostAddIcon,
    disableSvg: true,
    label: 'Nueva factura',
  }],
  [TABS.DELIVERY_ORDERS]: [{
    variant: 'contained',
    onClick: _handleClickNewDeliveryOrder,
    Icon: PostAddIcon,
    disableSvg: true,
    label: 'Nuevo albarán',
    disabled: true,
  }],
  [TABS.BUDGET]: [{
    variant: 'contained',
    onClick: _handleClickNewBudget,
    Icon: AddIcon,
    disableSvg: true,
    label: 'Nuevo presupuesto',
    disabled: true,
  }],
}[currentTab]);
