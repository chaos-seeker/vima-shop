import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex items-center justify-between bg-white border px-3.5 py-4 rounded-2xl my-5">
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
      </div>
    </footer>
  );
};
