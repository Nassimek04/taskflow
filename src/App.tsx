import { useSelector } from 'react-redux';
import type { RootState } from './store';
import Login from './features/auth/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  const user = useSelector((state: RootState) => state.auth.user);
  if (!user) return <Login />;
  return <Dashboard />;
}