import React from 'react';

function Footer(){
//   const github='https://www.linkedin.com/in/lema-el-sherbiny-b41340193/'
  const linkedIn='https://github.com/lemlooma'

  return (
    <nav className={`footer`}>
        <a  href='https://www.linkedin.com/in/lema-el-sherbiny-b41340193/' style={{ marginLeft: '20px', color: "mediumblue",textDecoration:"none" }}>LinkedIn</a>
        <a  href={linkedIn} style={{ marginLeft: '20px', color: "mediumblue", textDecoration:"none"}}>Github Profile</a>
    </nav>
  );
}

export default Footer;
