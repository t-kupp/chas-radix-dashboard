import { Text, Card } from '@radix-ui/themes';
import sale0 from '../assets/sale0.png';
import sale1 from '../assets/sale1.png';
import sale2 from '../assets/sale2.png';
import sale3 from '../assets/sale3.png';
import sale4 from '../assets/sale4.png';

export default function RecentSales() {
  return (
    <Card size='3' className='col-span-1 lg:col-span-3'>
      <Text size='3' weight='bold'>
        Recent Sales
      </Text>
      <Text as='div' color='gray' size='2'>
        You made 265 sales this month.
      </Text>
      <div>
        <SalesList />
      </div>
    </Card>
  );
}

function SalesList() {
  const salesData = [
    {
      id: 0,
      avatar: sale0,
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      salesValue: '+$1,999.00',
    },
    {
      id: 1,
      avatar: sale1,
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      salesValue: '+$39.00',
    },
    {
      id: 2,
      avatar: sale2,
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      salesValue: '+$299.00',
    },
    {
      id: 3,
      avatar: sale3,
      name: 'William Kim',
      email: 'william.kim@email.com',
      salesValue: '+$99.00',
    },
    {
      id: 4,
      avatar: sale4,
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      salesValue: '+$39.00',
    },
  ];

  return (
    <>
      {salesData.map((sale) => {
        return (
          <div key={sale.id} className='my-8 flex items-center'>
            <img
              src={sale.avatar}
              alt=''
              className='mr-4 max-h-9 rounded-full'
            />
            <div>
              <Text weight='medium' size='2' as='div'>
                {sale.name}
              </Text>
              <Text size='1' color='gray' as='div'>
                {sale.email}
              </Text>
            </div>
            <Text size='3' weight='medium' className='ml-auto'>
              {sale.salesValue}
            </Text>
          </div>
        );
      })}
    </>
  );
}
