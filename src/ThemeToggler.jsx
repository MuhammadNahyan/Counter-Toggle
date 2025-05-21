// import React, { useState, useEffect } from "react";

// function ThemeToggler() {
//     const [theme, setTheme] = useState(() => {
//         return localStorage.getItem("theme") || 'light';
//     })

//     useEffect(() => {
//         document.body.className = theme;
//         localStorage.setItem("theme", theme);
//     }, [theme])

//     const changeTheme = () => {
//         setTheme(theme === 'light' ? 'dark' : 'light')
//     }

//     return(
//         <button onClick={changeTheme}>
//             Switch to {theme === 'light' ? 'dark' : 'light'} mode
//         </button>
//     )
// }

// export default ThemeToggler

import React, { useState, useEffect } from 'react';

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Apply theme to <body> and save it
  useEffect(() => {
    document.body.className = ''; // Clear old theme
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-toggler">
      {/* <h1>{theme === 'light' ? '🔆 Light Mode' : '🌙 Dark Mode'}</h1>
      <button onClick={toggleTheme}>
        Toggle Theme🔆
      </button> */}
      <button onClick={toggleTheme}>{theme === 'light' ? '🔆' : '🌙'}</button>
    </div>
  );
};

export default ThemeToggler;
