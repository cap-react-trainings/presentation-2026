import React from 'react';
import './stylings.css';

interface ReactLogoProps {
  scale?: number;
}

const ReactLogo: React.FC<ReactLogoProps> = ({ scale = 1 }: ReactLogoProps) => {
  return (
    <div className='app' data-id='logo' style={{ transform: 'scale(' + scale + ')' }}>
      <div className='react' />
      <div className='dot' />
    </div>
  );
};

export default ReactLogo;
