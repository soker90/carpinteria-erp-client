export const INITIAL_STATE = {
  name: '',
  weight: 0,
  price: 0,
  unit: 'Kg',
};

export const fields = [
  {
    id: 'weight',
    label: 'Peso / Cantidad',
    type: 'number',
  },
  {
    id: 'unit',
    label: 'Unidades',
  },
  {
    id: 'price',
    label: 'Precio',
    type: 'number',
  },
];