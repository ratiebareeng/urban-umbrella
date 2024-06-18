import React, { useState } from 'react';
import Section from './Section';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';


export default function Examples(){
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
        <Section id="examples" title="Examples">
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
        </Section>
    );

    function onClick(item){
      setSelectedItem(item);
    }
}