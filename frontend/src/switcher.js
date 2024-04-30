import React, { useState } from 'react';
import useDarkSide from './utils/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="tw-m-auto tw-flex tw-justify-center tw-items-center">
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size="28" sunColor="#" moonColor="white" />
      </div>
    </>
  );
}
