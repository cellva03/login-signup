import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Landing from './components/home/Landing.jsx';
import Home from './components/home/views/Home'
// import Footer from './components/footer/Footer'
// import Header from './components/header/Header'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import { useRef , useEffect} from 'react'
import { useLocation} from 'react-router-dom';
import AppRoute from './components/home/utils/AppRoute.js';
import ScrollReveal from './components/home/utils/ScrollReveal.js';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './components/home/layouts/LayoutDefault';

// // Views 
// import Home from './views/Home';

// // Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

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
  <>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Routes>
          <AppRoute exact path="/" element={<Home/>} layout={LayoutDefault} />
        </Routes>
      )} />
      <Router>
         <Routes>
             {/* <Route exact path="/" element = { <Home />}/> */}
             <Route exact path="/signup" element = { <Signup />}/>
             <Route exact path="/login" element = { <Login />}/>
         </Routes>
     </Router>
  </>
  );
}

// const App = () => {
//   return (<>
//     {/* <Home /> */}
//     <Router>
//         <Routes>
//             <Route exact path="/" element = { <Home />}/>
//             <Route exact path="/signup" element = { <Signup />}/>
//             <Route exact path="/login" element = { <Login />}/>
//         </Routes>
//     </Router>
//     </>
//   )
// }

export default App;
