
import './App.css'
import '../app/globals.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { useEffect, useState } from 'react';
function App() {
  const [theme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    // else {
    //     element.classList.remove("dark");
    //     localStorage.setItem("theme", "light");
    // }
  }, [theme]);

  return (
    <main className='noverflow-x-hidden'>
      <RouterProvider router={routes} />
    </main>
  )
}

export default App
