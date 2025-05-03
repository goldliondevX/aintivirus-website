'use client';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils/style-utils';
import { useState } from 'react';
import MenuIcon from '@/ui/components/icons/menu';
import CloseIcon from '@/ui/components/icons/close';
import { usePathname } from 'next/navigation';

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: 'Bridge', href: '/bridge' },
  { name: 'Gift Card / E Sim', href: '#' },
  { name: 'Merch', href: '#' },
  { name: 'Sell Phones', href: '#' },
  { name: 'Cross Chain Mixer', href: '#' },
  { name: 'Dao', href: '#' },
  { name: 'Blog', href: '#' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="top-0 fixed z-50 px-4 left-0 right-0 bg-black flex justify-center">
        <div className="flex w-full max-w-[var(--content-width)] items-center py-6 justify-between">
          <div className="flex">
            <Image
              src="/images/logo.png"
              alt="logo"
              layout="intrinsic"
              width={225}
              height={150}
            />
          </div>

          <div className="md:hidden flex items-center y">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-xl focus:outline-none text-primary"
            >
              {isMobileMenuOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon width="32" height="32" />
              )}
            </button>
          </div>

          <ul
            className={`md:flex md:space-x-6 text-sm space-y-4 md:space-y-0 absolute md:static bg-black md:bg-transparent w-full md:w-auto transition-all duration-300 md:flex-row ${
              isMobileMenuOpen ? 'top-16 left-0 p-4' : 'hidden'
            }`}
          >
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={cn(
                    'hover:text-cyan-400 transition-colors font-semibold',
                    pathname.includes(item.href) && 'text-cyan-400 font-bold'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-[100px] md:h-[150px]" />
    </>
  );
};

export default Navbar;
