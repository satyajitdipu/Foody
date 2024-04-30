import React from 'react';
import { Navigate } from 'react-router-dom';

function Protectedlog(props) {
  const { Component } = props;
 

 

  return (
    <>
      {localStorage.getItem('userg') ? (
        <Component />
      ) : (
        <Navigate to='/login' />
      )}
    </>
  );
}

export default Protectedlog;
