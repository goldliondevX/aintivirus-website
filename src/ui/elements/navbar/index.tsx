import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils/style-utils';

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
      <ul className="flex space-x-6 text-sm">
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
