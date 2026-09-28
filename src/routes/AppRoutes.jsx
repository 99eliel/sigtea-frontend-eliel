import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Login from '../pages/Login.jsx';
import Pacientes from '../pages/Pacientes.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pacientes" element={<Pacientes />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRoutes;
