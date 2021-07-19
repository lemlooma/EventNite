import React from 'react';

function Footer(){
  const github='https://www.linkedin.com/in/lema-el-sherbiny-b41340193/'
  const linkedIn='https://github.com/lemlooma'

  return (
    <nav className={`footer`}>
        <a className="nav-link" href={github} style={{ marginLeft: '20px' }}>Github Profile</a>
        <a className="nav-link" href={linkedIn} style={{ marginLeft: '20px' }}>LinkedIn</a>
    </nav>
  );
}

export default Footer;
