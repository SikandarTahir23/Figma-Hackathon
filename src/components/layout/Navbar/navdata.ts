export interface NavdataProps {
    id: number;
    title: string;
    type: 'link' | 'button';
    href?: string;
  }

  export const navdata: Array<NavdataProps> = [
    {
        id: 1,
        title: 'Home',
        type: 'link',
        href: '/',
      },
      {
        id: 2,
        title: 'pages',
        type: 'link',
        href: '/demo',
      },
      {
        id: 3,
        title: 'Products',
        type: 'link',
        href: '/shopleft',
      },
      {
        id: 4,
        title: 'Blog',
        type: 'link',
        href: '/blog',
      },
      {
        id: 5,
        title: 'Shop',
        type: 'link',
        href: '/shoplist',
      },
      {
        id: 5,
        title: 'Contact',
        type: 'link',
        href: '/contact',
      },
  ];