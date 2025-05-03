import { FC, ReactNode } from 'react';

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
  return (
    <main className="container mx-auto min-h-screen lg:px-0 px-4 max-w-[var(--content-width)] flex-grow">
      {children}
    </main>
  );
};


export default ContentLayout;