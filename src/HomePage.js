import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

 const HomePage=()=> {
     window.close()
     window.open(
         './login', '_blank', 'toolbar=no, location=no, scrollbar=no, resizable=yes, top=0, left=200, width=1200, height=1000'
     )
     return <></>
}

export default HomePage   