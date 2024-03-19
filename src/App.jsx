
import ReactDOM  from 'react-dom';
import Mobile from './mobile'; // Import Mobile component
import Desktop from './desktop';

import React, { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Call once to set the initial state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MobileContent = () => {
    return (
      <>
        <Mobile/>
      </>
    );
  };

  const DesktopContent = () => {
    return (
     <>
     <Desktop/>
     </>
    );
  };

  return (
    <>
      {isMobile ? <MobileContent /> : <DesktopContent />}
    </>
  );
}


export default App;


