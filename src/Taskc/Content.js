import React from 'react'
import { Tabs, Tab } from './Tabs'

const Content = () => {
  return (
    <>
    <div>
      <h1>Tabs Example</h1>
      <Tabs defaultTab="tab1">
        <Tab label="tab1">
          <div>
            <h2>Tab 1 Content</h2>
            <p>This is the content of Tab 1.</p>
          </div>
        </Tab>
        <Tab label="tab2">
          <div>
            <h2>Tab 2 Content</h2>
            <p>This is the content of Tab 2.</p>
          </div>
        </Tab>
        <Tab label="tab3">
          <div>
            <h2>Tab 3 Content</h2>
            <p>This is the content of Tab 3.</p>
          </div>
        </Tab>
      </Tabs>
    </div>
    </>
  )
}

export default Content