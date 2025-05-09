'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/style-utils';
import MenuIcon from '@/ui/components/icons/menu';
import CloseIcon from '@/ui/components/icons/close';

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: 'Bridge', href: 'https://bridge.aintivirus.ai/' },
  { name: 'Gift Card / E Sim', href: 'https://esim.aintivirus.ai/' },
  { name: 'Merch', href: 'https://store.aintivirus.ai/' },
  { name: 'Sell Phones', href: 'https://tradein.aintivirus.ai' },
  { name: 'Cross Chain Mixer', href: 'https://mix.aintivirus.ai' },
  {
    name: 'Dao',
    href: 'https://app.realms.today/dao/6wRxTDDWpkcsicS1PSi9vcgzsSK452Bx4Ds6fXDUHgDk ',
  },
  { name: 'Blog', href: '#' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="top-0 fixed z-50 px-4 left-0 right-0 bg-black flex justify-center max-h-[80px]">
        <div className="flex w-full max-w-[var(--content-width)] items-center py-6 justify-between">
          <div className="flex">
            <Image
              src="/images/logo.png"
              alt="logo"
              layout="intrinsic"
              width={225}
              height={34}
              className="h-[40px]"
            />
          </div>

          <div className="lg:hidden flex items-center">
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

          <ul className="hidden lg:flex md:space-x-6 text-sm font-semibold">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  target="_blank"
                  className={cn(
                    'hover:text-cyan-400 transition-colors',
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

      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full md:w-64 bg-black z-40 transform transition-transform duration-300 ease-in-out lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <ul className="flex flex-col mt-24 space-y-6 px-6 text-white font-semibold">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'hover:text-cyan-400 transition-colors',
                  pathname.includes(item.href) && 'text-cyan-400 font-bold'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-[100px] md:h-[150px]" />
    </>
  );
};

export default Navbar;
