import { CalendarIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

export default function WeekDisplay() {
  return (
    <>
      <Button variant='outline' className='!hidden text-slate-800 sm:!flex'>
        <CalendarIcon /> Jan 20, 2023 - Feb 09, 2023
      </Button>
      <Button variant='outline' className='!flex text-slate-800 sm:!hidden'>
        <CalendarIcon />
      </Button>
    </>
  );
}
