import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  useEffect(() => {
    setLoginCheck(auth.loggedIn());
  }, []);

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <header className='nav'>
      <Link to='/' className='nav-brand' aria-label='Kanban board home'>
        <span className='nav-brand-mark'>K</span>
        <span className='nav-brand-copy'>
          <strong>Kanban</strong>
          <small>Plan. Track. Ship.</small>
        </span>
      </Link>

      <nav className='nav-actions' aria-label='Primary navigation'>
        {!loginCheck ? (
          <Link to='/login' className='nav-button'>
            Login
          </Link>
        ) : (
          <button type='button' className='nav-button nav-button--ghost' onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
