import { LayoutDashboard, LogOut, UsersRound } from 'lucide-react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('sigtea_usuario_mock');
    navigate('/login');
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="logo">SIGTEA</span>
          <small>Squad 1 • Frontend</small>
        </div>

        <nav className="menu">
          <NavLink to="/dashboard">
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink to="/pacientes">
            <UsersRound size={18} />
            Pacientes
          </NavLink>
        </nav>

        <button className="logout-button" type="button" onClick={handleLogout}>
          <LogOut size={18} />
          Sair
        </button>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
