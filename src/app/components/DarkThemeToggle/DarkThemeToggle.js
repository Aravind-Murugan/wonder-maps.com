/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */

// import libraries
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DarkModeToggle } from 'react-dark-mode-toggle-2'

// import Modules
import { TOGGLE_DARKTHEME } from 'redux/actions'

const DarkThemeToggle = () => {
  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
  const dispatch = useDispatch();

  return (
    <>
      <DarkModeToggle 
        onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
        isDarkMode={darkThemeEnabled} 
      />
    </>
  );
};

export default DarkThemeToggle
