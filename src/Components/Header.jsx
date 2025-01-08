import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [theme, setTheme] = useState('dark');

  // Update the document class when theme changes
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark', 'purple', 'blue');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header className="bg-white shadow-lg cursor-pointer">
      <div className="max-w-8xl mx-auto flex items-center justify-between p-3">
        <div className="flex items-center">
          <img src={Logo} alt="Taskmate Logo" className="w-14 h-14 md:w-16 md:h-16" />
          <span className="md:text-3xl text-xl font-semibold ml-3 text-gray-800">Taskmate</span>
        </div>
        <div className='md:space-x-5 shadow-2xl space-x-2'>
          {/* Theme toggle buttons */}
          <span
            className={`text-slate-400 font-bold cursor-pointer ${theme === 'light' && 'text-blue-500'}`}
            onClick={() => setTheme('light')}
          >
            Light
          </span>
          <span
            className={`text-gray-800 font-bold cursor-pointer ${theme === 'dark' && 'text-blue-500'}`}
            onClick={() => setTheme('dark')}
          >
            Dark
          </span>
          <span
            className={`text-purple-800 font-bold cursor-pointer ${theme === 'purple' && 'text-blue-500'}`}
            onClick={() => setTheme('purple')}
          >
            Purple
          </span>
          <span
            className={`text-blue-700 font-bold cursor-pointer ${theme === 'blue' && 'text-blue-500'}`}
            onClick={() => setTheme('blue')}
          >
            Blue
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
