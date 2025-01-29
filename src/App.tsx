import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Router } from './Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
