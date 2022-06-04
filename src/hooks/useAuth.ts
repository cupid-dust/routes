import { useContext } from 'react';
import AuthContext from '../context/JWTContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
