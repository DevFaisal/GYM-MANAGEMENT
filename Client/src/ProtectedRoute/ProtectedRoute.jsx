import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Dashboard from '../components/Dashboard/Dashboard';

function ProtectedRoute({ children }) {
    const { isAdmin, isAuthenticated } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        } else if (children.type === Dashboard && !isAdmin) {
            navigate('/');
            return null;
        }
    }, [isAuthenticated, isAdmin, children, navigate]);

    return isAuthenticated ? children : null;
}

export default ProtectedRoute;
