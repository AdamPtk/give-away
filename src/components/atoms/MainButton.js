import { Link } from 'react-router-dom';

const MainButton = ({text}) => {
    return <Link to="/login">{text}</Link>
}

export default MainButton;