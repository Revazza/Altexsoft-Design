import React from 'react';
import '../../styles/main/Main.css';
import { useLocation } from "react-router-dom";
import SubNav from './SubNav';
import Tips from './Tips/Tips';
import Glossary from './Glossary/Glossary';
import Faqs from './FAQS/Faqs';

function Main() {

  const location = useLocation();

  return (
    <main>
      <section className='choosen-section'>
        <h1>{location.state?.section ?? 'skout'}</h1>
      </section>
      <main className='content'>
        <SubNav />
        <Tips />
        <Glossary />
        <Faqs />
      </main>
    </main>
  )
}

export default Main;
