import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Reg from './Reg';
import { matchesPattern } from '@babel/types';

export default class ShowProfile extends React.Component
 {
      render(){
      //  console.log(this.props.location.state)
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < 8; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      var r1='';
    
      for(var j=0;j<3;j++)
      {
        r1+=this.props.location.state.hname.charAt(j);
      }
        return(
        <div id="show"><center>
         
         <div><h1>YOU HAVE SUCCESSSFULLY LOGGED IN</h1> </div>
         <img src="http://clipart-library.com/image_gallery/435665.gif" alt="hurray..."></img>
        
           <table id="t5">
             <tr><td><b>Registration Id:</b></td><td>{r1+"#"+result}</td></tr><br></br>
             <tr><td><b>Name:</b></td><td>{this.props.location.state.hname}</td></tr><br></br>
           <tr><td><b>Date-Of-Birth:</b></td>  <td>{this.props.location.state.hdate}</td></tr><br></br>
           <tr><td><b>Country:</b></td>  <td>{this.props.location.state.value}</td></tr><br></br>
           <tr><td><b>Phone-Number:</b></td> <td>{this.props.location.state.hnum}</td></tr><br></br>
           <tr><td><b>Email:</b></td><td>{this.props.location.state.hemail}</td></tr><br></br>
           <tr><td><b>Website:</b></td><td>{this.props.location.state.hweb}</td></tr>
          
           </table>
           
           
          
           </center>
        </div>
        

          
              );
    }
    
    
    }