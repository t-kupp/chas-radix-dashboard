import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const root = createRoot(document.getElementById('root'));

let theme = window.matchMedia('(prefers-color-scheme: light)').matches
  ? 'light'
  : 'dark';

const toggleTheme = () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  renderApp();
};

const renderApp = () => {
  root.render(
    <StrictMode>
      <Theme appearance={theme} accentColor='gray'>
        <App onToggle={toggleTheme} theme={theme} />
      </Theme>
    </StrictMode>,
  );
};

renderApp();
