export const INITIAL_STATE = {
  total: '',
  dateInvoice: null,
  nInvoice: '',
  nameProvider: '',
};

export const fields = [
  {
    id: 'nInvoice',
    label: 'Nº Factura',
  },
  {
    id: 'total',
    label: 'Cantidad',
    options: { type: 'number' },
  },
  {
    id: 'nameProvider',
    label: 'Proveedor',
  },
];
