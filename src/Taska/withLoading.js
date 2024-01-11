import React, { useState, useEffect } from 'react';

const withLoading = (WrappedComponent, fetchData) => {
  return function WithLoading(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchDataAsync = async () => {
        try {
          const result = await fetchData();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchDataAsync();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <WrappedComponent {...props} data={data} />;
  };
};

export default withLoading;
