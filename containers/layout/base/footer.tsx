import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  RiHome5Fill,
  RiHome5Line,
  RiShoppingBasketFill,
  RiShoppingBasketLine,
  RiStore2Fill,
  RiStore2Line,
  RiUserSmileFill,
  RiUserSmileLine,
} from 'react-icons/ri';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <FooterBase />
        <MobileBottomNav />
      </div>
    </footer>
  );
};

const MobileBottomNav = () => {
  const pathname = usePathname();
  const data = [
    {
      href: '/',
      label: 'خانه',
      line: RiHome5Line,
      fill: RiHome5Fill,
    },
    {
      href: '/cart',
      label: 'سبد خرید',
      line: RiShoppingBasketLine,
      fill: RiShoppingBasketFill,
    },
    {
      href: '/shop',
      label: 'فروشگاه',
      line: RiStore2Line,
      fill: RiStore2Fill,
    },
    {
      href: '/account',
      label: 'ناحیه کاربری',
      line: RiUserSmileLine,
      fill: RiUserSmileFill,
    },
  ];

  return (
    <nav className="lg:hidden fixed inset-x-0 bottom-0 z-50" dir="rtl">
      <div className="border-t bg-white px-5 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
        <div className="mx-auto max-w-7xl">
          <ul className="flex items-center justify-between">
            {data.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(item.href);
              const Icon = isActive ? item.fill : item.line;
              return (
                <li key={item.href} className="flex-1">
                  <Link
                    href={item.href}
                    className="flex flex-col items-center gap-1 text-gray-400"
                  >
                    <Icon
                      size={24}
                      className={isActive ? 'text-primary' : 'text-gray-400'}
                    />
                    <span
                      className={
                        isActive
                          ? 'bg-primary text-white px-2.5 py-0.5 rounded-full text-xs'
                          : 'text-gray-400 text-xs'
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const FooterBase = () => {
  return (
    <div className="flex items-center mb-22 lg:mb-5 justify-between bg-white border px-3.5 py-4.5 rounded-2xl mt-5">
      <Link href="/">
        <Image
          src="/images/layout/logo.png"
          alt="logo"
          width={110}
          height={100}
        />
      </Link>
      <p className="text-center text-sm text-gray-500">
        &copy; 1404 حمید شاهسونی
      </p>
    </div>
  );
};
