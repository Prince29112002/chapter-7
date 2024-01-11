import React from 'react'
import ErrorBoundary from './ErrorBoundary'

const ErrorComponent = () => {
    // Simulate an error
    throw new Error('This is a simulated error!');
  };

const Errormsg = () => {
  return (
    <>
    <div>Errormsg</div>
    <div>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        {/* Wrap the error-prone component with the error boundary */}
        <ErrorComponent />
      </ErrorBoundary>
    </div>
    </>

  )
}

export default Errormsg