import React from 'react';
import withLoading from './withLoading';

const ExampleComponent = ({ data }) => {
  return (
    <div>
      <h1>Example Component</h1>
      <p>Data: {data}</p>
    </div>
  );
};

const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fetched Data');
    }, 2000);
  });
};

export default withLoading(ExampleComponent, fetchData);
