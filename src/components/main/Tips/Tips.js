import React from 'react';
import '../../../styles/main/Tips/Tips.css';
import TipsItem from './TipsItem';

function Tips() {
  return (
    <section className='tips-section'>
      <h3>Skout <span>Tips</span></h3>

      <div className='tips-list'>
        <TipsItem />
      </div>
    </section>
  )
}

export default Tips;
