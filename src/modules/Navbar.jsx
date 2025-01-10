import SelectMenu from './SelectMenu';
import NavLinks from './NavLinks';
import Searchbar from './Searchbar';
import Dropdown from './Dropdown';
import ThemeButton from './ThemeButton';
import MobileDropdown from './MobileDropdown';

export default function Navbar({ onToggle, theme }) {
  return (
    <div className='flex w-full items-center gap-4 p-4'>
      <div className='!flex sm:!hidden'>
        <MobileDropdown />
      </div>
      <SelectMenu />
      <NavLinks />
      <div className='ml-auto flex items-center gap-4'>
        <Searchbar />
        <ThemeButton onToggle={onToggle} theme={theme} />
        <Dropdown />
      </div>
    </div>
  );
}
