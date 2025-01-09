import SelectMenu from './SelectMenu';
import NavLinks from './NavLinks';
import Searchbar from './Searchbar';
import Dropdown from './Dropdown';

export default function Navbar() {
  return (
    <div className='flex w-full items-center gap-4 border-b p-4'>
      <SelectMenu />
      <NavLinks />
      <div className='ml-auto flex gap-4'>
        <Searchbar />
        <Dropdown />
      </div>
    </div>
  );
}
