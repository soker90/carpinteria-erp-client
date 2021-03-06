import { PieChart as PieChartIcon, ShoppingCart, Users as UsersIcon } from 'react-feather';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EuroIcon from '@material-ui/icons/Euro';
// import PostAddIcon from '@material-ui/icons/PostAdd';
import DescriptionIcon from '@material-ui/icons/Description';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const year = new Date().getFullYear();

export const navConfig = [
  {
    subheader: 'Informes',
    items: [
      {
        title: 'Inicio',
        icon: PieChartIcon,
        href: '/app/informes/inicio',
      },
      {
        title: 'Facturación',
        icon: DescriptionIcon,
        href: `/app/informes/facturacion/${year}`,
      },
    ],
  },
  {
    subheader: 'Clientes',
    items: [
      {
        title: 'Clientes',
        icon: UsersIcon,
        href: '/app/clientes/listado',
      },
      {
        title: 'Libro',
        icon: MenuBookIcon,
        href: `/app/clientes/libro/${year}`,
      },
      {
        title: 'Productos',
        icon: ShoppingCart,
        href: '/app/clientes/productos',
      },
    ],
  },
  {
    subheader: 'Proveedores',
    items: [
      {
        title: 'Provedores',
        icon: UsersIcon,
        href: '/app/proveedores',
      },
      {
        title: 'Libro',
        icon: MenuBookIcon,
        href: `/app/libro/${year}`,
      },
      {
        title: 'Pagos',
        icon: EuroIcon,
        href: '/app/pagos',
      },
      /* {
        title: 'Notas',
        icon: PostAddIcon,
        href: '/app/notas',
      }, */
    ],
  },
  {
    subheader: 'Operaciones',
    items: [
      {
        title: 'Intercambio',
        icon: SwapHorizIcon,
        href: '/app/intercambio',
      },
    ],
  },
];
