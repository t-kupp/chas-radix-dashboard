import { Button } from '@radix-ui/themes';
import WeekDisplay from './WeekDisplay';
import TabList from './TabList';
import DataCards from './DataCards';
import Overview from './Overview';
import RecentSales from './RecentSales';
import { DownloadIcon } from '@radix-ui/react-icons';

export default function Dashboard() {
  return (
    <div className='p-4 sm:p-6 md:p-8'>
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Dashboard</h1>
        <div className='ml-auto flex gap-4'>
          <WeekDisplay />
          <Button variant='outline' className='!hidden sm:!block'>
            Download
          </Button>
          <Button variant='outline' className='!block sm:!hidden'>
            <DownloadIcon />
          </Button>
        </div>
      </div>
      <div className='mt-8 flex'>
        <TabList />
      </div>
      <DataCards />
      <div className='mt-4 grid grid-cols-1 gap-4 lg:grid-cols-7'>
        <Overview />
        <RecentSales />
      </div>
    </div>
  );
}
