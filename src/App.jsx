
import { useState } from 'react';

import { CORE_CONCEPTS } from './data';
import Header from './components/header/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';

function App() {
  const [ selectedItem, setSelectedItem ] = useState('');

  let tabContent = <p>Please select a topic above</p>;

  if(selectedItem){
    tabContent = (
    <div id="tab-content">
    <h3>{EXAMPLES[selectedItem].title}</h3>
    <p>{EXAMPLES[selectedItem].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedItem].code}
  </code>
</pre>
 </div>);
  }

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (<CoreConcepts key={concept.title} {...concept}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton 
          title="Components" 
          isSelected={selectedItem === "components"} 
          onClick={()=>onClick("components")}></TabButton>
          <TabButton 
          title="JSX"  
          isSelected={selectedItem === "jsx"}
          onClick={()=>onClick("jsx")}></TabButton>
          <TabButton 
          title="Props"
          isSelected={selectedItem === "props"} 
          onClick={()=>onClick("props")}></TabButton>
          <TabButton 
          title="State" 
          isSelected={selectedItem === "state"}
          onClick={()=>onClick("state")}></TabButton>
          </menu>
            { tabContent }
        </section>
      </main>
    </div>
  );


function onClick(selectedItem){
  console.log(selectedItem);
  setSelectedItem(selectedItem);
}

function Card({name}){
  return (<Card name={name}></Card>);
  }
}
export default App;
