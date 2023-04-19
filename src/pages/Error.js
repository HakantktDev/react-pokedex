import React from 'react';
import Navigation from '../components/Navigation';

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
