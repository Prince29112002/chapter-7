import React, { Suspense, lazy } from 'react'
const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))

export default class Index extends React.Component {
  render() {
    return (
      <>
      <h1>Lazy Loading</h1>
      <Suspense fallback={<div>Please Wait... Home Is Loading</div>} >
        <Home />
      </Suspense>

      <Suspense fallback={<div>Please Wait... About Is Loading</div>} >
        <About />
      </Suspense>
      </>
    )
  }
}
