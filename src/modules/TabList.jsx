import { SegmentedControl, Select } from '@radix-ui/themes';

export default function TabList() {
  return (
    <>
      <div className='!hidden sm:!flex'>
        <SegmentedControl.Root defaultValue='overview'>
          <SegmentedControl.Item value='overview'>
            Overview
          </SegmentedControl.Item>
          <SegmentedControl.Item value='analytics'>
            Analytics
          </SegmentedControl.Item>
          <SegmentedControl.Item value='reports'>Reports</SegmentedControl.Item>
          <SegmentedControl.Item value='notifications'>
            Notifications
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      </div>
      <div className='!flex sm:!hidden'>
        <Select.Root defaultValue='overview'>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value='overview'>Overview</Select.Item>
            <Select.Item value='analytics'>Analytics</Select.Item>
            <Select.Item value='reports'>Reports</Select.Item>
            <Select.Item value='notifications'>Notifications</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </>
  );
}
