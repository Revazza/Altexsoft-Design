import React from 'react';
import '../../styles/main/Main.css';
import { useLocation } from "react-router-dom";
import SubNav from './SubNav';
import Tips from './Tips/Tips';
import Glossary from './Glossary/Glossary';
import Faqs from './FAQS/Faqs';
import Footer from '../footer/Footer';

function Main() {

  const location = useLocation();

  return (
    <main>
      <section className='choosen-section'>
        <h1>{location.state?.section ?? 'skout'}</h1>
      </section>
      <main className='content'>
        <SubNav />
        <div id='tipsSection'></div>
        <Tips />
        <div id="glossarySection"></div>
        <Glossary />
        <div id="faqsSection"></div>
        <Faqs />
      </main>
      <Footer />
    </main>
  )
}

export default Main;
