import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='nav'>
      <Link to='/' className='nav-brand' aria-label='Kanban board home'>
        <span className='nav-brand-mark'>K</span>
        <span className='nav-brand-copy'>
          <strong>Kanban</strong>
          <small>Plan. Track. Ship.</small>
        </span>
      </Link>

      <div className='nav-actions'>
        <span className='nav-button nav-button--ghost'>Portfolio Demo</span>
      </div>
    </header>
  );
};

export default Navbar;
