'use client';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils/style-utils';
import { useState } from 'react';
import MenuIcon from '@/ui/components/icons/menu';
import CloseIcon from '@/ui/components/icons/close';

interface MenuItem {
  name: string;
  href: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  { name: 'Bridge', href: '#', active: true },
  { name: 'Gift Card / E Sim', href: '#' },
  { name: 'Merch', href: '#' },
  { name: 'Sell Phones', href: '#' },
  { name: 'Cross Chain Mixer', href: '#' },
  { name: 'Dao', href: '#' },
  { name: 'Blog', href: '#' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex w-full items-center py-6 justify-between">
      <div className="flex">
        <Image
          src="/images/logo.png"
          alt="logo"
          layout="intrinsic"
          width={225}
          height={150}
        />
      </div>

      <div className="lg:hidden flex items-center y">
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
        className={`lg:flex lg:space-x-6 text-sm space-y-4 lg:space-y-0 absolute lg:static bg-black lg:bg-transparent w-full lg:w-auto transition-all duration-300 lg:flex-row ${
          isMobileMenuOpen ? 'top-16 left-0 p-4' : 'hidden'
        }`}
      >
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.href}
              className={cn(
                'hover:text-cyan-400 transition-colors font-semibold',
                item.active && 'text-cyan-400 font-bold'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
