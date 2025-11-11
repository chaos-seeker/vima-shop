import Image from 'next/image';
import Link from 'next/link';
import { RiShoppingBasketLine, RiUser6Fill } from 'react-icons/ri';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between bg-white border p-3.5 rounded-2xl my-5">
          <Link href="/">
            <Image
              src="/images/layout/logo.png"
              alt="logo"
              width={110}
              height={100}
            />
          </Link>
          <div className="bg-gray-100 rounded-md p-1.5 flex items-center gap-2">
            <Link href="/auth">
              <RiUser6Fill className="text-black size-5" />
            </Link>
            <Link
              href="/cart"
              className="bg-white p-1 rounded-md flex items-center gap-1"
            >
              <RiShoppingBasketLine className="text-black size-5" />
              <div className="bg-primary rounded-md flex justify-center items-center px-1.5 py-0.5">
                <span className="text-white text-xs font-bold">0</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
