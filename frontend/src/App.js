
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, background: '#fff', padding: '32px' }}>
        {/* Home page content will go here */}
        <h1>Welcome to SmartLibrary</h1>
        <p>Start building your library management system!</p>
      </main>
    </div>
  );
}

export default App;
