import React from 'react';

const MenuItem = ({ label, link }) => {
  return (
    <li><a href={link}>{label}</a></li>
  );
}

export default MenuItem;
