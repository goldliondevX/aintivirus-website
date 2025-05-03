import { FC } from 'react';
import Image from 'next/image';
import YoutubeIcon from '@/ui/components/icons/youtube';
import TransparentButton from '@/ui/elements/button/transparent-button';
import CoinMarketCapIcon from '@/ui/components/icons/coin-market-cap';
import MediumIcon from '@/ui/components/icons/medium';
import TwitterIcon from '@/ui/components/icons/twitter';
import SpotifyIcon from '@/ui/components/icons/spotify';

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

          <div className="gap-3 mt-4 hidden lg:flex">
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <YoutubeIcon />
            </TransparentButton>
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <CoinMarketCapIcon />
            </TransparentButton>
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <MediumIcon />
            </TransparentButton>
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <TwitterIcon />
            </TransparentButton>
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <SpotifyIcon />
            </TransparentButton>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center space-x-8">
          <div className="flex gap-3 mt-4 lg:hidden">
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <YoutubeIcon />
            </TransparentButton>
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <CoinMarketCapIcon />
            </TransparentButton>
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <MediumIcon />
            </TransparentButton>
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <TwitterIcon />
            </TransparentButton>
            <TransparentButton className="p-2 aspect-square rounded-lg">
              <SpotifyIcon />
            </TransparentButton>
          </div>

          <div className="text-center md:text-left mb-8 md:mb-0 py-4">
            <h3 className="text-cyan-400 font-semibold mb-2">Links</h3>
            <ul className="lg:grid lg:grid-cols-2 flex flex-col gap-x-6 gap-y-1 text-gray-500 text-sm">
              <li>Bridge</li>
              <li>Sell Phones</li>
              <li>Gift Card / E Sim</li>
              <li>Cross Chain Mixer</li>
              <li>Merch</li>
              <li>Dao</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <Image
              src="/images/grid-brand.png"
              alt="John McAfee NFT Grid"
              width={300}
              height={300}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-4 text-sm text-center text-white/50">
        Copyright ©2025 <span className="font-semibold">Antivirus</span>. All
        rights reserved
      </div>
    </footer>
  );
};

export default BridgeFooter;
