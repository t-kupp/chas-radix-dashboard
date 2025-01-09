import './App.css';
import Navbar from './modules/Navbar';
import Dashboard from './modules/Dashboard';
import { Card, Separator } from '@radix-ui/themes';

function App({ onToggle, theme }) {
  return (
    <div className='!p-8'>
      <Card className='mx-auto max-w-7xl rounded-lg !p-0'>
        <Navbar onToggle={onToggle} theme={theme} />
        <Separator size='4' />
        <Dashboard />
      </Card>
    </div>
  );
}

export default App;
