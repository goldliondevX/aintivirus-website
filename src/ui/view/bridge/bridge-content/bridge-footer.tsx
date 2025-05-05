import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import YoutubeIcon from '@/ui/components/icons/youtube';
import TransparentButton from '@/ui/elements/button/transparent-button';
import CoinMarketCapIcon from '@/ui/components/icons/coin-market-cap';
import MediumIcon from '@/ui/components/icons/medium';
import TwitterIcon from '@/ui/components/icons/twitter';
import SpotifyIcon from '@/ui/components/icons/spotify';

const links = [
  { name: 'Bridge', href: 'https://bridge.aintivirus.ai/' },
  { name: 'Gift Card / E Sim', href: 'https://esim.aintivirus.ai/' },
  { name: 'Merch', href: 'https://store.aintivirus.ai/' },
  { name: 'Sell Phones', href: 'https://aintivirus.ai/tradein' },
  { name: 'Cross Chain Mixer', href: 'https://mix.aintivirus.ai' },
  {
    name: 'Dao',
    href: 'https://app.realms.today/dao/6wRxTDDWpkcsicS1PSi9vcgzsSK452Bx4Ds6fXDUHgDk',
  },
  { name: 'Blog', href: '#' },
];

const BridgeFooter: FC = () => {
  return (
    <footer className="w-full text-white py-10 px-6 sm:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center">
        <div className="space-y-6 mb-8 lg:mb-0">
          <Image
            src="/images/logo.png"
            alt="Aintivirus Logo"
            width={200}
            height={40}
            className="mb-2"
          />

          <p className="font-xl font-dmsans max-w-72 lg:max-w-96 text-white/70">
            Promoting the ideas and legacy of{' '}
            <span className="font-semibold">John McAfee</span>
          </p>

          <div className="gap-3 mt-4 hidden lg:flex">
            <Link
              className="contents"
              href="https://www.youtube.com/@AIntivirusPodcast"
            >
              <TransparentButton className="w-12 h-12 rounded-lg">
                <YoutubeIcon />
              </TransparentButton>
            </Link>
            <Link
              className="contents"
              href="https://coinmarketcap.com/currencies/aintivirus/"
            >
              <TransparentButton className="w-12 h-12 rounded-lg">
                <CoinMarketCapIcon />
              </TransparentButton>
            </Link>
            <Link
              className="contents"
              href="https://medium.com/@AIntivirusPodcast"
            >
              <TransparentButton className="w-12 h-12 rounded-lg">
                <MediumIcon />
              </TransparentButton>
            </Link>
            <Link className="contents" href="https://x.com/officialmcafee">
              <TransparentButton className="w-12 h-12 rounded-lg">
                <TwitterIcon />
              </TransparentButton>
            </Link>
            <Link
              className="contents"
              href="https://open.spotify.com/show/0vH2h9j4mIrPnvnYKbl9Po?si=6i-0wgfGQqCwlIp7eNIb_w"
            >
              <TransparentButton className="w-12 h-12 rounded-lg">
                <SpotifyIcon />
              </TransparentButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center space-x-8">
          <div className="flex gap-3 mt-4 lg:hidden">
            <Link
              className="contents"
              href="https://www.youtube.com/@AIntivirusPodcast"
            >
              <TransparentButton className="w-12 h-12 rounded-lg">
                <YoutubeIcon />
              </TransparentButton>
            </Link>
            <Link
              className="contents"
              href="https://coinmarketcap.com/currencies/aintivirus/"
            >
              <TransparentButton className="w-12 h-12 rounded-lg">
                <CoinMarketCapIcon />
              </TransparentButton>
            </Link>
            <Link
              className="contents"
              href="https://medium.com/@AIntivirusPodcast"
            >
              <TransparentButton className="w-12 h-12 rounded-lg">
                <MediumIcon />
              </TransparentButton>
            </Link>
            <Link className="contents" href="https://x.com/officialmcafee">
              <TransparentButton className="w-12 h-12 rounded-lg">
                <TwitterIcon />
              </TransparentButton>
            </Link>
            <Link
              className="contents"
              href="https://open.spotify.com/show/0vH2h9j4mIrPnvnYKbl9Po?si=6i-0wgfGQqCwlIp7eNIb_w"
            >
              <TransparentButton className="w-12 h-12 rounded-lg">
                <SpotifyIcon />
              </TransparentButton>
            </Link>
          </div>

          <div className="text-center lg:text-left mb-8 lg:mb-0 py-4 !ms-2">
            <h3 className="text-cyan-400 font-semibold text-2xl lg:text-sm pb-5 lg:pb-3">
              Links
            </h3>
            <ul className="lg:grid lg:grid-flow-col lg:grid-rows-4 flex flex-col gap-x-6 gap-y-6 lg:gap-y-3 text-gray-500 text-lg lg:text-sm">
              {links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-primary transition-colors whitespace-nowrap"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src="/images/mcafee-grid.png"
              alt="John McAfee NFT Grid"
              width={300}
              height={300}
              className="object-contain rounded-lg lg:w-72 lg:h-72"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-4 text-sm text-center text-white/50">
        Copyright ©2025 <span className="font-semibold">Aintivirus</span>. All
        rights reserved
      </div>
    </footer>
  );
};

export default BridgeFooter;
