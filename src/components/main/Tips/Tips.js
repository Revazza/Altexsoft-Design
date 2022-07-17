import React from 'react';
import '../../../styles/main/Tips/Tips.css';
import TipsItem from './TipsItem';

function Tips() {
  return (
    <section className='tips-section' >
      <h3>Skout <span>Tips</span></h3>

      <div className='tips-list'>
        <TipsItem itemNum={1} title='System Patching'/>
        <TipsItem itemNum={2} title='End-to-End Protection'/>
        <TipsItem itemNum={3} title='Empowering Teams'/>
        <TipsItem itemNum={4} title='Secure Credentials'/>
      </div>
    </section>
  )
}

export default Tips;
