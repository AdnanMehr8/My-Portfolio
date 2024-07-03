import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Loader from './components/Loader';
import { HideLoading, ShowLoading, SetPortfolioData, ReloadData } from './redux/rootSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Admin from './pages/Admin';
import Login from './pages/Admin/Login';

axios.defaults.baseURL = 'https://mern-portfolio-backend-opal.vercel.app/';
function App() {
  const { loading, portfolioData, reloadData } = useSelector(state => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {

    try {
      dispatch(ShowLoading());
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      // const response = await axios.get('https://mern-portfolio-backend-opal.vercel.app/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }

  };

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData])


  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);


  return (
        <div className=''>
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
          
  );
}

export default App;
