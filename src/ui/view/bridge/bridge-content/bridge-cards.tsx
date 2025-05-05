import { FC } from 'react';

import TransparentCard from '@/ui/elements/card/transparent-card';

const BridgeCards: FC = () => {
  return (
    <div className="grid w-full md:grid-cols-4 sm:px-32 md:px-12 grid-cols-2 items-center gap-4 place-items-center">
      <TransparentCard
        className="rounded-2xl w-40 h-32 lg:w-56 lg:h-32"
        href="https://solscan.io/token/BAezfVmia8UYLt4rst6PCU4dvL2i2qHzqn4wGhytpNJW"
      >
        <div className="flex flex-col font-dmsans items-center justify-center h-full">
          <span className="text-primary text-2xl font-semibold">10k+</span>
          <span className="font-extralight text-sm">Holders</span>
        </div>
      </TransparentCard>
      <TransparentCard
        className="rounded-2xl w-40 h-32 lg:w-56 lg:h-32"
        href="https://coinmarketcap.com/currencies/aintivirus/#Markets"
      >
        <div className="flex flex-col font-dmsans items-center justify-center h-full">
          <span className="text-primary text-2xl font-semibold">10+</span>
          <span className="font-extralight text-sm">Exchanges</span>
        </div>
      </TransparentCard>
      <TransparentCard
        className="rounded-2xl w-40 h-32 lg:w-56 lg:h-32"
        href="https://solscan.io/account/EBay8RhDhxJNd2pmu6NxWDdJQDkZcHq5JzBmXuKXXmZw"
      >
        <div className="flex flex-col font-dmsans items-center justify-center h-full">
          <span className="text-primary text-2xl font-semibold">100m+</span>
          <span className="font-extralight text-sm">On Chain Volume</span>
        </div>
      </TransparentCard>
      <TransparentCard
        className="rounded-2xl w-40 h-32 lg:w-56 lg:h-32"
        href="https://solscan.io/account/1nc1nerator11111111111111111111111111111111#portfolio"
      >
        <div className="flex flex-col font-dmsans items-center justify-center h-full">
          <span className="text-primary text-2xl font-semibold">58k+</span>
          <span className="font-extralight text-sm">Burned Ainti</span>
        </div>
      </TransparentCard>
    </div>
  );
};

export default BridgeCards;
