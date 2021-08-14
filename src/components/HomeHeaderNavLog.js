import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from './contexts/AuthContext';

const HomeHeaderNavLog = () => {
    const [error, setError] = useState("")

    const {currentUser, logout} = useAuth();

    async function handleLogout() {
        setError("")
        try {
            await logout()
        }
        catch {
            setError("Failed to log out")
        }
    }

    return (
        <nav className="nav-log">
            {currentUser ?
                <>
                    <span style={{fontSize: "0.8125rem"}}>Hello {currentUser.email}!</span>
                    <Link to="give-away" className="active">Give Away!</Link>
                    <Link to="/logout" onClick={handleLogout} style={error ? {color: "red"} : {}}>Logout</Link>
                </>
                :
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register" className="active">Register</Link>
                </> 
            }
        </nav>
    );
}

export default HomeHeaderNavLog;