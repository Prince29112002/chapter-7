import './App.css';
import ExampleComponent from './Taska/ExampleComponent';
import MouseTracker from './Taskb/MouseTracker';
import Content from './Taskc/Content';
import Model2 from './Taskd/Model2';
import Index from './Taskf/Index';
import ForwardRef from './Taskg/ForwardRef';
// import Errormsg from './Taske/Errormsg';


function App() {
  return (
    <>
    <ExampleComponent />
    <h1>Mouse Tracker</h1>
    <MouseTracker
    render={(position) => (
      <div>
        <p>Mouse X: {position.x}</p>
        <p>Mouse Y: {position.y}</p>
      </div>
    )}
    />
    <Content />
    <Model2 />
    {/* <Errormsg /> */}
    <Index />
    <ForwardRef />

    </>
  );
}

export default App;
