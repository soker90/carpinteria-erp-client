/* eslint-disable react-hooks/exhaustive-deps */
import {
  lazy, memo, useEffect, useState,
} from 'react';
import { Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router';

import { HashTabs, LoadingScreen, Page } from 'components';

import { TABS, HASH_TABS } from '../constants';
import ClientExpandedInfo from './ClientExpandedInfo';
import Header from './Header';
import { useStyles } from './Client.styles';

const Client = ({
  client,
  getClient,
  createClientInvoice,
  createDeliveryOrder,
}) => {
  const classes = useStyles();
  const { id } = useParams();
  const { hash } = useLocation();
  const [expand, setExpand] = useState(false);
  const [currentTab, setCurrentTab] = useState(TABS.INVOICES);

  useEffect(() => {
    if (id) getClient(id);
  }, [id, getClient]);

  useEffect(() => {
    // eslint-disable-next-line
    HASH_TABS[hash]
    && setCurrentTab(HASH_TABS[hash]);
  }, [hash]);

  /**
   * Expande o contrae la información
   * @private
   */
  const _toggleExpand = () => {
    setExpand(!expand);
  };

  if (!id) return <LoadingScreen />;

  /**
   * imports de los componentes de cada pestaña
   * @private
   */
  const _components = {
    [TABS.INVOICES]: lazy(() => import('./ClientInvoices')),
    [TABS.BUDGET]: lazy(() => import('./ClientBudgets')),
    [TABS.DELIVERY_ORDERS]: lazy(() => import('./ClientDeliveryOrders')),
  };

  /**
   * Componente de la pestaña actual
   */
  const TabComponent = _components[currentTab];

  return (
    <Page className={classes.root} title={client.name}>
      <Container maxWidth={false}>
        <Header
          expanded={expand}
          onExpand={_toggleExpand}
          title={client?.name}
          clientId={id}
          createClientInvoice={createClientInvoice}
          currentTab={currentTab}
          createDeliveryOrder={createDeliveryOrder}
        />

        <ClientExpandedInfo
          expanded={expand}
          client={client}
        />

        <HashTabs currentTab={currentTab} tabs={Object.values(TABS)} />

        <Box py={3} pb={6}>
          <TabComponent
            idClient={id}
          />
        </Box>

      </Container>
    </Page>
  );
};

Client.propTypes = {
  client: PropTypes.object.isRequired,
  getClient: PropTypes.func.isRequired,
  createClientInvoice: PropTypes.func.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
};

Client.displayName = 'Client';

export const story = Client;
export default memo(Client);
