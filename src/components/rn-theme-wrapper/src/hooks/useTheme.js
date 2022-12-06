import {useContext} from 'react';
import {ThemeContext} from '../contex/ThemeProvider';

const useTheme = () => {
  console.log("come for return")
  return useContext(ThemeContext);
};

export default useTheme;
