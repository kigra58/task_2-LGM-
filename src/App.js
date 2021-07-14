import logo from './logo.svg';
import './bootstrap.min.css';
import './App.css';
import React,{ Fragment, useState, } from 'react';
import Axios from 'axios';

function App() {


  const [state,setState]=useState([]);

  

const apiCall= ()=>{



Axios.get(" https://reqres.in/api/users?page=1 ").then( (data)=>{ console.log(data);

const newData=data.data.data;

console.log(newData)

setState(newData);
  
} )



}

  

    return (

      
      <Fragment>

                           
          
        <div className="container p-3">
         
        
         {/* NavBar   */}

           <nav className="navbar navbar-expand-lg fixed-top  navbar-light bg-dark shadow " >
               <div className="container ">
                 <a className="navbar-brand text-white" href="#"><b>Zippy</b></a>
                
                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                   <div className="navbar-nav mx-md-auto ">
                     <a className="nav-link active text-white bi bi-arrow-down-circle fs-2 " aria-current="page" href="#"  type="button" onClick={apiCall} >Get Data</a>
    
                   </div>
                 </div>
               </div>
           </nav>

        </div>
        
        <h2 className="alert alert-info mt-5 text-center"> User Information </h2>
        
        <div className='row text center'>

        {
         state.map( (curElement,i)=>{
               return(
                            <div>

                                 <div className="col-10 col-md-6 mt-5 text-center" >
                                   
                                   <div className="card text-center border-5 border-danger mx-5" >
                                       
                                    <figure  className="figure-img img-fluid rounded "  >
                                     <img src={curElement.avatar} className="figure-img img-fluid rounded" alt="..." height="350px" width="600px"  ></img>
                                    </figure>

                                   
                                   <h6 > ID:{curElement.id} </h6>
                                   <h6 >Name: {curElement.first_name +" "+ curElement.last_name}</h6>
                                   <h6 >Email: {curElement.email} </h6>

                                   </div>
                                    
                                 </div>

                            </div>
             
               )
         } )
       }

        </div>

      </Fragment>
    );



}

export default App;
