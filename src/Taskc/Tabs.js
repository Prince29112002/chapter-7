// Tabs.js
import React, { useState, createContext, useContext } from 'react';

// Create a context to manage the active tab state
const TabsContext = createContext();

const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabsContext.Provider value={{ activeTab, onTabClick: handleTabClick }}>
      <div>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { activeTab })
        )}
      </div>
    </TabsContext.Provider>
  );
};

const Tab = ({ label, children }) => {
  const { activeTab, onTabClick } = useContext(TabsContext);

  return (
    <div
      onClick={() => onTabClick(label)}
      style={{
        padding: '10px',
        cursor: 'pointer',
        border: activeTab === label ? '1px solid #000' : '1px solid #ddd',
        backgroundColor: activeTab === label ? '#f0f0f0' : '#fff',
      }}
    >
      {children}
    </div>
  );
};

export { Tabs, Tab };
