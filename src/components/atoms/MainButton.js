import { Link } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';

const MainButton = ({text}) => {
    const {currentUser} = useAuth();

    return <Link to={currentUser ? "/give-away" : "/login"}>{text}</Link>
}

export default MainButton;