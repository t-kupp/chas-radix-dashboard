import './App.css';
import Navbar from './modules/Navbar';
import Dashboard from './modules/Dashboard';

function App() {
  return (
    <div className='p-0 sm:p-2 md:p-4 lg:p-6 xl:p-8'>
      <div className='rounded-lg border'>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
