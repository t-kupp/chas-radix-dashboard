import React from 'react';
import { Button } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

const ThemeToggleButton = ({ onToggle, theme }) => {
  return (
    <Button highContrast onClick={onToggle}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggleButton;
