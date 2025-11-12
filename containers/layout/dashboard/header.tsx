'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  RiAwardFill,
  RiAwardLine,
  RiCloseLine,
  RiFolderFill,
  RiFolderLine,
  RiMenu4Fill,
  RiMessageFill,
  RiMessageLine,
  RiShoppingBagFill,
  RiShoppingBagLine,
  RiShoppingCartFill,
  RiShoppingCartLine,
  RiUserFill,
  RiUserLine,
} from 'react-icons/ri';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <div className="relative">
          <div className="flex flex-col items-center justify-between bg-white border px-3.5 py-4 rounded-2xl my-5">
            <div className="flex w-full items-center justify-between">
              <Menu />
              {pathname === '/dashboard/manage-products' && (
                <button className="bg-primary text-white px-4 py-2.5 rounded-xl hover:bg-primary/80 transition-all">
                  افزودن محصول
                </button>
              )}
              {pathname === '/dashboard/manage-categories' && (
                <button className="bg-primary text-white px-4 py-2.5 rounded-xl hover:bg-primary/80 transition-all">
                  افزودن دسته‌بندی
                </button>
              )}
              {pathname === '/dashboard/manage-brands' && (
                <button className="bg-primary text-white px-4 py-2.5 rounded-xl hover:bg-primary/80 transition-all">
                  افزودن برند
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      label: 'مدیریت محصولات',
      href: '/dashboard/manage-products',
      icon: RiShoppingBagFill,
      iconLine: RiShoppingBagLine,
    },
    {
      label: 'مدیریت دسته‌بندی‌ها',
      href: '/dashboard/manage-categories',
      icon: RiFolderFill,
      iconLine: RiFolderLine,
    },
    {
      label: 'مدیریت برندها',
      href: '/dashboard/manage-brands',
      icon: RiAwardFill,
      iconLine: RiAwardLine,
    },
    {
      label: 'مدیریت سفارش‌ها',
      href: '/dashboard/manage-orders',
      icon: RiShoppingCartFill,
      iconLine: RiShoppingCartLine,
    },
    {
      label: 'مدیریت کاربران',
      href: '/dashboard/manage-users',
      icon: RiUserFill,
      iconLine: RiUserLine,
    },
    {
      label: 'مدیریت دیدگاه ها',
      href: '/dashboard/manage-comments',
      icon: RiMessageFill,
      iconLine: RiMessageLine,
    },
  ];

  return (
    <div className="flex items-center">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <RiCloseLine className="size-7" />
        ) : (
          <RiMenu4Fill className="size-7" />
        )}
      </button>
      <div
        className={cn(
          'bg-white border px-3.5 py-4 w-fit rounded-2xl my-5 transition-all absolute right-0 top-16',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
      >
        <ul>
          {data.map((item) => {
            const IconFill = item.icon;
            const IconLine = item.iconLine;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-primary group"
                >
                  <span className="relative">
                    <IconLine className="size-7 group-hover:opacity-0 group-hover:text-white transition-all" />
                    <IconFill className="size-7 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all absolute top-0 right-0" />
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
