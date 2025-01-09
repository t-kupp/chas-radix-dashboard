import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export default function Searchbar() {
  return (
    <TextField.Root placeholder='Search…'>
      <TextField.Slot>
        <MagnifyingGlassIcon height='16' width='16' />
      </TextField.Slot>
    </TextField.Root>
  );
}
