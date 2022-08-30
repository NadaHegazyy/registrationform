import React,{useState} from 'react';

import './App.css';
import Profile from './Profile/Profile';
import RegistrationForm from './Registration/Registration';

const App=()=> {
  const[defaultcomp,setDefaultcomp]=useState('RegistrationForm');
  const [data,setData]=useState({username:'',email:'',password:'',confirmpass:'',mobile:'',id:''});
  
  const changeComponent=(name)=>{
    
     setDefaultcomp(name);
  }
  return (
   
    <div className='container'>
    {defaultcomp ==='RegistrationForm' ?
    <RegistrationForm setData={setData}  changeComponent={changeComponent}/>
     :
     <Profile data={data}  changeComponent={changeComponent}/>
      }
    </div>
  );
}

export default App;
