import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Header } from 'components';
import { getButtons } from './utils';

const HeaderProvider = ({
  title,
  onExpand,
  expanded,
  clientId,
  createClientInvoice,
  currentTab,
  createDeliveryOrder,
}) => {
  const _handleClickNewInvoice = () => {
    createClientInvoice(clientId);
  };

  const _handleClickNewDeliveryOrder = () => {
    createDeliveryOrder(clientId);
  };

  const _handleClickNewBudget = () => {

  };

  const _buttons = useMemo(() => (
    getButtons({
      currentTab,
      _handleClickNewBudget,
      _handleClickNewDeliveryOrder,
      _handleClickNewInvoice,
      // eslint-disable-next-line
    })), [currentTab]);

  return (
    <Header
      routes={[{
        link: '/app/clientes',
        title: 'Clientes',
      }]}
      title={title}
      description={title}
      buttonsSecondary={[{
        variant: 'text',
        onClick: onExpand,
        Icon: expanded ? ExpandLessIcon : ExpandMoreIcon,
        disableSvg: true,
        label: expanded ? 'Ocultar información' : 'Mostrar información',
      }]}
      buttons={_buttons}
    />
  );
};

HeaderProvider.propTypes = {
  title: PropTypes.string,
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  createClientInvoice: PropTypes.func.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
  clientId: PropTypes.string,
  currentTab: PropTypes.string.isRequired,
};

HeaderProvider.displayName = 'Client-Header';

export const story = HeaderProvider;
export default memo(HeaderProvider);
