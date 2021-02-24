/**
 * Pestañas del cliente
 * @type {{DELIVERY_ORDERS: string, BUDGET: string, INVOICES: string}}
 */
export const TABS = {
  INVOICES: 'Facturas',
  BUDGET: 'Presupuestos',
  DELIVERY_ORDERS: 'Albaranes',
};

/**
 * Mapeo de hashes para activar las pestañas
 * @type {{'#Albaranes': string, '#Facturas': string}}
 */
export const HASH_TABS = {
  '#Albaranes': TABS.DELIVERY_ORDERS,
  '#Facturas': TABS.INVOICES,
  '#Presupuestos': TABS.BUDGET,
};
