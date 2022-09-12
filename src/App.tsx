
import Header from './components/Header';

import TabsButton from './components/TabsButton';
import Loading from './components/Loading'
import './App.css';
import { useState } from 'react';
import JobsInfo from './components/JobsInfo';
import Button from './components/Button';


function App() {

  const [value, setValue] = useState(0)

  return (
    <section className="section">
        <Header title = {'Experience'}/>
        <JobsInfo setValue={setValue} value = {value}/>
        <Button text={'More info'}/>
    </section>
  )

}

export default App;
