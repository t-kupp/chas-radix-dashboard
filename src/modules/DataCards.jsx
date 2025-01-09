import { Card } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes';

export default function DataCards() {
  return (
    <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      <MyCard
        header='Total Revenue'
        icon={<i className='fa-solid fa-dollar-sign'></i>}
        value='$45,231.89'
        subtext='+20.1% from last month'
      />
      <MyCard
        header='Subscriptions'
        icon={<i className='fa-regular fa-user'></i>}
        value='+2350'
        subtext='+180.1% from last month'
      />
      <MyCard
        header='Sales'
        icon={<i className='fa-regular fa-credit-card'></i>}
        value='+12,234'
        subtext='+19% from last month'
      />
      <MyCard
        header='Active Now'
        icon={<i className='fa-solid fa-chart-line'></i>}
        value='+573'
        subtext='+201 since last hour'
      />
    </div>
  );
}

function MyCard({ header, icon, value, subtext }) {
  return (
    <Card size='3'>
      <div className='flex'>
        <Text color='black' weight='medium' size='2' as='div'>
          {header}
        </Text>
        <div className='ml-auto'>{icon}</div>
      </div>
      <Text size='6' weight='bold'>
        {value}
      </Text>
      <Text as='div' size='1' color='gray'>
        {subtext}
      </Text>
    </Card>
  );
}
