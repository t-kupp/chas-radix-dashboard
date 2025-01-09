import SelectMenu from './SelectMenu';
import NavLinks from './NavLinks';
import Searchbar from './Searchbar';
import Dropdown from './Dropdown';
import ThemeButton from './ThemeButton';

export default function Navbar({ onToggle, theme }) {
  return (
    <div className='flex w-full items-center gap-4 p-4'>
      <SelectMenu />
      <NavLinks />
      <div className='ml-auto flex gap-4'>
        <Searchbar />
        <ThemeButton onToggle={onToggle} theme={theme} />
        <Dropdown />
      </div>
    </div>
  );
}
