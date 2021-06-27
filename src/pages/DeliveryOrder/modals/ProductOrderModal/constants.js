export const INITIAL_STATE = {
  name: '',
  iva: 0,
  price: 0,
  unit: 0,
};

export const fields = [
  {
    id: 'unit',
    label: 'Unidades',
    type: 'number',
  },
  {
    id: 'price',
    label: 'Precio',
    type: 'number',
  },
  {
    id: 'iva',
    label: 'IVA (%)',
    type: 'number',
  },
];
