import { Select } from '@radix-ui/themes';

export default function SelectMenu() {
  return (
    <Select.Root defaultValue='alicia-koch'>
      <Select.Trigger />
      <Select.Content position='popper'>
        <Select.Group>
          <Select.Label className='!text-xs'>Personal Account</Select.Label>
          <Select.Item value='alicia-koch'>Alicia Koch</Select.Item>
        </Select.Group>
        <Select.Group>
          <Select.Label className='!text-xs'>Teams</Select.Label>
          <Select.Item value='acme-inc'>Acme Inc.</Select.Item>
          <Select.Item value='monsters-inc'>Monsters. Inc</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
