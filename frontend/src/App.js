

import Sidebar from './Sidebar';
import Category from './Category';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <main style={{ flex: 1, background: '#fff', padding: '32px' }}>
          <Routes>
            <Route path="/" element={
              <>
                <h1>Welcome to SmartLibrary</h1>
                <p>Start building your library management system!</p>
              </>
            } />
            <Route path="/category" element={<Category />} />
            <Route path="*" element={
              <>
                <h1>Welcome to SmartLibrary</h1>
                <p>Start building your library management system!</p>
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
