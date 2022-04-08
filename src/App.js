import React, {useState} from 'react';
import './App.css';
import Birthdaylist from './components/birthdaylist';
import informaton from './components/informaton';
function App (){
  const[people,setPeople] = useState(informaton)
  function clearAllData(){
    setPeople([])
  }
  return (
    <div className="App">
     <main className='main'>
       <section className='container'>
         <h4>{people.length} Birthdays Today</h4>
         <Birthdaylist people={people}/>
         <button onClick={clearAllData}>Clear</button>
       </section>
     </main>
    </div>
  );
}
 
   
  


export default App;
