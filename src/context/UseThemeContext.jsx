import { useEffect, useState } from 'react';

export default function useThemeContext() {
  // theme primary secondary error warning info success text background action
  const [theme, setTheme] = useState('darkGreen');

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    }
  }, []);

  // change theme

  const changeTheme = (theme) => {
    window.localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');

    if (theme) {
      setTheme(theme);

      if (theme === 'dark') {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    }
  }, []);

  return {
    theme,
    changeTheme
  };
}
