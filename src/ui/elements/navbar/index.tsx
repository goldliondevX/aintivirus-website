import LogoIcon from '@/ui/components/icons/logo';

const Navbar = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="bg-red-500">
        <LogoIcon className="h-10 w-10" />
      </div>
    </div>
  );
};

export default Navbar;
