import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { DropdownMenu, IconButton } from '@radix-ui/themes';

export default function MobileDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton highContrast>
          <HamburgerMenuIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Overview</DropdownMenu.Item>
        <DropdownMenu.Item>Analytics</DropdownMenu.Item>
        <DropdownMenu.Item>Reports</DropdownMenu.Item>
        <DropdownMenu.Item>Notifications</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
