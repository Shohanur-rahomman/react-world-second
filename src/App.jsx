 
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries';

const countriesFetch = fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json());

function App() {
   

  return (
    <>
      
      <h1>React World Second</h1>
      <Suspense fallback={<h2>loading</h2>}>
        <Countries countriesFetch={countriesFetch}></Countries>
      </Suspense>
     
    </>
  )
}

export default App
