import { DropdownMenu } from '@radix-ui/themes';
import avatar from '../assets/avatar.png';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <img
          src={avatar}
          className='max-w-9 cursor-pointer rounded-full'
          alt='avatar'
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Alicia Koch</DropdownMenu.Item>
        <DropdownMenu.Item className='!text-xs text-slate-500'>
          alicia.koch@email.com
        </DropdownMenu.Item>
        <div className='!block sm:!hidden'>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut={<MagnifyingGlassIcon />}>
            Search...
          </DropdownMenu.Item>
        </div>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut='⇧⌘P'>Profile</DropdownMenu.Item>
        <DropdownMenu.Item shortcut='⌘B'>Billing</DropdownMenu.Item>
        <DropdownMenu.Item shortcut='⌘S'>Settings</DropdownMenu.Item>
        <DropdownMenu.Item>New Team</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color='red' shortcut='⇧⌘Q'>
          Logout
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
