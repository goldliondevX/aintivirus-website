'use client';
import { FC } from 'react';

import TransparentCard from '@/ui/elements/card/transparent-card';
import Carousel from '@/ui/elements/carousel';
import useBreakpoints from '@/hooks/use-breakpoints';

const BridgeNftCollections: FC = () => {
  const { isLarge } = useBreakpoints();

  const carouselVisibleCount = !isLarge ? 3 : 5;

  return (
    <div className="w-full gap-2 h-full pt-16 flex flex-col relative items-center">
      <TransparentCard className="text-primary w-fit rounded-full py-1 font-bold px-4">
        Aintivirus Artwork
      </TransparentCard>

      <h2 className="text-4xl text-center md:text-5xl font-light space-x-2">
        <span className="font-dotgothic text-primary tracking-wider">
          AINTIVIRUS
        </span>
        <span className="font-poppins text-white font-bolder">
          NFT COLLECTION
        </span>
      </h2>

      <Carousel
        visibleCount={carouselVisibleCount}
        className="h-[20rem] md:h-[35rem]"
        images={[
          '/images/nft/nft-1.jpg',
          '/images/nft/nft-2.jpg',
          '/images/nft/nft-3.jpg',
          '/images/nft/nft-4.jpg',
          '/images/nft/nft-5.jpg',
        ]}
      />

      <p className="absolute bottom-14 text-gray-400 md:bottom-28 left-1/2 -translate-x-1/2 w-[90%] md:max-w-[22.5rem] mx-auto font-inter text-sm text-center mt-6">
        Save on fees, get access to a never before seen John McAfee pics and
        videos, and more, with the AIntivirus NFTs!
      </p>
    </div>
  );
};

export default BridgeNftCollections;
