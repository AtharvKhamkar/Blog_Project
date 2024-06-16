import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { Footer, Header } from './components';
import { login, logout } from './store/authSlice';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log(userData);
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return !isLoading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main> </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
