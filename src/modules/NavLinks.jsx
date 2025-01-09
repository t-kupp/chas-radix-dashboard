import { Link } from '@radix-ui/themes';

export default function NavLinks() {
  return (
    <div className='!hidden gap-4 md:!flex'>
      <MyLink title={'Overview'} active={true} />
      <MyLink title={'Customers'} />
      <MyLink title={'Products'} />
      <MyLink title={'Settings'} />
    </div>
  );
}

function MyLink({ title, active }) {
  return (
    <Link
      highContrast={active ? true : undefined}
      underline='none'
      weight='medium'
      href='#'
      size='2'
      className='hover:text-slate-800'
    >
      {title}
    </Link>
  );
}
