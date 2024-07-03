import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';

const Home = () => {
  const { portfolioData } = useSelector(state => state.root);
  const { loading } = useSelector(state => state.root);

  if (loading) {
    return null; // or you can return a loading indicator here
  }

  return (
    <div>
      <Header />
      {portfolioData && (
        <div className='pt-24 px-40 sm:px-5'>
          <section id="intro">
            <Intro />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experiences">
            <Experiences />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
};

export default Home;
