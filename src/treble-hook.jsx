
//Custom hook for accessing AppContext in components

import {useContext} from 'react';
import Context from './context';


const useTreble = () => useContext(Context);

export default useTreble;