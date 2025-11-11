'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { RiArrowLeftLine, RiArrowRightLine, RiCloseLine, RiMenu4Fill } from 'react-icons/ri';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="relative">
          <div className="flex flex-col items-center justify-between bg-white border px-3.5 py-4 rounded-2xl my-5">
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/images/layout/logo.png"
                  alt="logo"
                  width={110}
                  height={100}
                />
              </Link>
              <MobileHumbergerMenu />
            </div>
            <div className="mt-3 flex w-full justify-center border-t px-4 py-4">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const MobileHumbergerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden flex items-center">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <RiCloseLine className="text-black size-7" />
        ) : (
          <RiMenu4Fill className="text-black size-7" />
        )}
      </button>
      <div
        className={cn(
          'bg-white border px-3.5 py-4 rounded-2xl my-5 transition-all absolute w-full right-0 top-16',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
      >
        <ul>
          <li>
            <Link href="/" className="flex items-center gap-2">
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Tabs = () => {
  const pathname = usePathname();
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const data = [
    { label: 'مدیریت محصولات', href: '/dashboard/manage-products' },
    { label: 'مدیریت دسته‌بندی‌ها', href: '/dashboard/manage-categories' },
    { label: 'مدیریت برندها', href: '/dashboard/manage-brands' },
    { label: 'مدیریت سفارش‌ها', href: '/dashboard/manage-orders' },
    { label: 'مدیریت کاربران', href: '/dashboard/manage-users' },
    { label: 'مدیریت دیدگاه ها', href: '/dashboard/manage-comments' },
  ];

  useEffect(() => {
    if (activeTabRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeTab = activeTabRef.current;
      const containerRect = container.getBoundingClientRect();
      if (window.innerWidth < 1024) {
        const tabRect = activeTab.getBoundingClientRect();
        const scrollLeft =
          activeTab.offsetLeft - containerRect.width / 2 + tabRect.width / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth lg:justify-center lg:overflow-x-visible"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {data.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + '/');
        return (
          <Link
            ref={isActive ? activeTabRef : null}
            href={item.href}
            key={item.href}
            className="shrink-0 snap-center"
          >
            <button
              className={cn(
                'rounded-xl px-4 py-2.5 text-sm font-medium',
                isActive
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-gray-500',
              )}
            >
              {item.label}
            </button>
          </Link>
        );
      })}
    </div>
  );
};
