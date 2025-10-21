import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import NMTLanding from '../pages/NMTLanding';
import NMTTeacherDetail from '../pages/NMTTeacherDetail';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NMTLanding />} />
        <Route path="/teachers/:teacherSlug" element={<NMTTeacherDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
