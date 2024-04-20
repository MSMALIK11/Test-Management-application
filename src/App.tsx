
import './App.css'
import '../app/globals.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
// import Loading from './components/shared/Loading';
import api from '@/services'
import { setCurrentUser } from './store/features/userSlice';
function App() {
  const dispatch = useDispatch()
  const [theme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const element = document.documentElement;
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: api.user.getUserProfile,
    refetchOnWindowFocus: true


  })


  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setCurrentUser(data.data.userData));
    }
  }, [data, isLoading, dispatch]);
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    // else {
    //     element.classList.remove("dark");
    //     localStorage.setItem("theme", "light");
    // }
  }, [theme, isLoading]);

  return (
    <main className='noverflow-x-hidden'>
      <Toaster position='top-center' />
      <RouterProvider router={routes} />
      {/* <Loading isLoading={isLoading} /> */}
    </main>
  )
}

export default App
