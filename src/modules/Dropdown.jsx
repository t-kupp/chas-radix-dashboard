import { DropdownMenu } from '@radix-ui/themes';
import avatar from '../assets/avatar.png';

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <img src={avatar} className='max-h-8 cursor-pointer' alt='avatar' />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Alicia Koch</DropdownMenu.Item>
        <DropdownMenu.Item className='!text-xs text-slate-500'>
          alicia.koch@email.com
        </DropdownMenu.Item>
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
