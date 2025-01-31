import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Router } from './Router';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      <Router />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
