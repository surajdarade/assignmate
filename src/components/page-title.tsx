'use client';

import { usePathname } from 'next/navigation';

const PageTitle = () => {
  const pathname = usePathname();

  let pageTitle = '';

  if (pathname === '/') {
    pageTitle = 'Dashboard';
  } else if (pathname === '/admin/url') {
    pageTitle = 'Short URL';
  } else if (pathname.includes('/admin/url/')) {
    pageTitle = 'Short URL Details';
  } else if (pathname === '/profile/') {
    pageTitle = 'My Profile';
  }

  return <h1 className='font-bold'>{pageTitle}</h1>;
};

export default PageTitle;
