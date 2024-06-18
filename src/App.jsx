import Header from './components/header/Header';
import { CORE_CONCEPTS } from './data';
import CoreConcepts from './components/CoreConcepts';
import Section from './components/Section';
import Examples from './components/Examples';

function App() {


  return (
    <>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts/>
        <Examples/>
      </main>
   </>
  );

}
export default App;
