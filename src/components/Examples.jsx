import React, { useState } from 'react';
import TabButton from './TabButton';
import EXAMPLES from '../data';

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

export default function Examples(){
    return (
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
    );
}