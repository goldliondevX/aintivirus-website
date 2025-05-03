import { FC } from 'react';
import Image from 'next/image';
import YoutubeIcon from '@/ui/components/icons/youtube';
import TransparentButton from '@/ui/elements/button/transparent-button';
import CoinMarketCapIcon from '@/ui/components/icons/coin-market-cap';
import MediumIcon from '@/ui/components/icons/medium';
import TwitterIcon from '@/ui/components/icons/twitter';
import SpotifyIcon from '@/ui/components/icons/spotify';
import Link from 'next/link';

const BridgeFooter: FC = () => {
  return (
    <footer className="w-full text-white py-10 px-6 sm:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center">
        <div className="space-y-6 mb-8 md:mb-0">
          <Image
            src="/images/logo.png"
            alt="Aintivirus Logo"
            width={200}
            height={40}
            className="mb-2"
          />

          <p className="font-xl font-dmsans text-white/70">
            Promoting the ideas and legacy of{' '}
            <span className="font-semibold">John McAfee</span>
          </p>

          <div className="gap-3 mt-4 hidden md:flex">
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

        <div className="flex flex-col-reverse md:flex-row items-center space-x-8">
          <div className="flex gap-3 mt-4 md:hidden">
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

          <div className="text-center md:text-left mb-8 md:mb-0 py-4">
            <ul className="md:grid md:grid-flow-col md:grid-rows-4 flex flex-col gap-x-6 gap-y-4 md:gap-y-1 text-gray-500 text-lg md:text-sm">
              <li>
                <h3 className="text-cyan-400 font-semibold">Links</h3>
              </li>
              <li>
                <Link href="https://aintivirus.ai/tradein">Bridge</Link>
              </li>
              <li>
                <Link href="https://esim.aintivirus.ai/">
                  Gift Card / E Sim
                </Link>
              </li>
              <li>
                <Link href="https://store.aintivirus.ai/">Merch</Link>
              </li>
              <li>
                <Link href="https://aintivirus.ai/tradein">Sell Phones</Link>
              </li>
              <li>
                <Link href="https://mixer.aintivirus.ai/">
                  Cross Chain Mixer
                </Link>
              </li>
              <li>
                <Link href="https://app.realms.today/dao/6wRxTDDWpkcsicS1PSi9vcgzsSK452Bx4Ds6fXDUHgDk ">
                  Dao
                </Link>
              </li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <Image
              src="/images/mcafee-grid.png"
              alt="John McAfee NFT Grid"
              width={300}
              height={300}
              className="object-contain rounded-lg"
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
