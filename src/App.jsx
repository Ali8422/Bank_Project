import React from 'react';
import MyNavbar from './MyNavbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
