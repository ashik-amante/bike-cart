
import { useContext } from 'react';
import { AuthContext } from '../Providers/FirebaseProvider';

const Useauth = () => {
    const all = useContext(AuthContext)
    return all
};

export default Useauth;