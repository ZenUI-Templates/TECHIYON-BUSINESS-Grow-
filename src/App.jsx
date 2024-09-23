import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Home from './pages/home/Home';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <ReactLenis root>
          <Home />
        </ReactLenis>
      )}
    </>
  );
};

export default App;
