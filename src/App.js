import React from 'react'
import Menu from './core/Menu'
import Layout from './core/Layout'
import Content from './core/Content'
import Sector from './core/Sector'
import Investing from './core/Investing'
import Hotel from './core/Hotel'
function App() {
  return (
    <div>
          <Menu />
          <Layout />
          <Content />
          <Sector />
          <Investing />
          <Hotel />
    </div>
  );
}

export default App;
