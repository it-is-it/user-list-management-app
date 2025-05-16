import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/create" element={<CreateUser />} />
      <Route path="/user/edit/:id" element={<EditUser />} />
      <Route path="/user/view/:id" element={<ViewUser />} />
    </Routes>
  );
}

export default App;
