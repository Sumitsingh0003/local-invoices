import React,{useEffect, useState } from 'react'
import { json, Link } from 'react-router-dom';
import axios from 'axios';

function Main() {
  
  const srvces = [ 
    { name: 'Create Invoice' },
    { name: 'Create PI' },
    { name: 'Create PO' },
    { name: 'Create DN' }
  ];

  // hamne ek object create kiya or use registration m store karwa liya
      const [registration, setRegistration] = useState({
        username: "",
        email:"",
        phone:"",
        city:"",
        password:"",
        confirmpassword:""
      });

  // onchange se jaise hi hmari handleInpt chala tabhi hamne registration m sar
  const handleInpt = (e) =>{
    // setRegistration k through registration ko update kr rhe hai & registration m sari empty values hai fr,  
    // e.target.name se input field ka jo bhi name(name="username") hai use target kr rha h [] ka use kiya hai bcs name sabhi k alag alah hai is liye,
    // e.target.value se uski value kya aa rhi hai use get kr rha hai use target kr rhe hai & jo bhi usme type kr rhe hi use utha rhi hai     
    setRegistration({...registration, [e.target.name]: e.target.value})
    console.log(registration);
    }


    
    
  //jaise hi form submit hua handleSubmit function run hua & registration m jo bhi data h wo sara lekar aya or newRecord m sav kr diya
    const handleSubmit = (e) =>{
      e.preventDefault();

      const password = registration.password;
      const confirmpassword = registration.confirmpassword;

      if(password === confirmpassword){
          axios.post('http://localhost:8000/register', registration)
        .then(res=>{
          return console.log("donee", res.data);
        })
        .catch(err=>{
          return console.log("error", err);
        })
      }
      else{
        window.alert("The Password is Worng")
      }
      
  }


  return (
    <>
      <section className='main_banner'>
        <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg" alt='' />
        <div className="bnner_cont">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="slide_cont">
                  <h2>Hello!</h2>
                  <h3>Welcome to the Invoice Generator provided by Invoiced.</h3>
                  <p>Take advantage of our free and secure invoice template to create professional invoices in one click.
                    This guide is intended for those who are just getting started with invoicing.</p>
                  <Link to="/register" className="rgstr_btn">Register Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="srvc">
        <div className="container">
          <div className="row">

            {srvces.map((servcEle) => {
              return (
                <div className="col-md-3" key={servcEle.name}>
                  <Link to="#." data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="srcvs_sec">
                      <h2>{servcEle.name}</h2>
                    </div>
                  </Link>
                </div>
              )
            })}

          </div>
        </div>
      </section>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Registration Form</h5>
            </div>
            <div className="modal-body">
              <div className='register_frm'>
                <form action="" method="POST" >

                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="username" autoComplete="off"
                      name="username"
                      placeholder="Enter Name" 
                      onChange={handleInpt}  //Input m kuch bhi type hoga ya jo bhi uski acitivity hogi use get krega handleInpt se  
                      value={registration.username}   //value abhi kya h wo hamne registration.username k through uski abhi ki value upar se get karli and abhi blank hai
                   />
                  </div>

                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email"  className="form-control" id="email" autoComplete="off"
                      name="email" 
                      placeholder="Enter email" 
                      onChange={handleInpt} 
                      value={registration.email} />
                  </div>

                  <div className="form-group">
                    <label>Mobile</label>
                    <input type="number" className="form-control" id="phone" autoComplete="off"
                      name="phone" 
                      placeholder="Enter Mobile" 
                      onChange={handleInpt} 
                      value={registration.phone}/>
                  </div>

                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" id="city" autoComplete="off"
                      name="city"
                      placeholder="Enter Your City" 
                      onChange={handleInpt} 
                      value={registration.city}/>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"id="password" autoComplete="off"
                        name="password" 
                        placeholder="Password" 
                        onChange={handleInpt} 
                        value={registration.password}/>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" id="confirmpassword" autoComplete="off"
                        name="confirmpassword" 
                        placeholder="Password" 
                        onChange={handleInpt} 
                        value={registration.confirmpassword} />
                      </div>
                    </div>

                  </div>

                  <button type="submit" onClick={handleSubmit} className="btn btn-primary rg_frm_btn">Submit</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main