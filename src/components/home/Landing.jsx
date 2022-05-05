import React from 'react';
import { useRef , useEffect} from 'react'
import { useLocation, Routes } from 'react-router-dom';
import AppRoute from './utils/AppRoute.js';
import ScrollReveal from './utils/ScrollReveal.js';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const Landing = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Routes>
          <AppRoute exact path="/" element={Home} layout={LayoutDefault} />
        </Routes>
      )} />
  );
}

export default Landing;