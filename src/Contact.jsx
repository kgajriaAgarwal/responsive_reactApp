import React, { useState } from 'react';
import Common from './Common';
import imgg from '../src/images/img1.jpg';

const Contact = () => { 

  //Hooks @toplevel of the functional compoenenet
  const [data,setData] = useState ({
      fname : '', 
      email : '',
      feedback : ''
 });

 //onchange Event of  inputField
  const InputEvent = (event) => {
    const {name , value} = event.target;

    setData((preVal)=> { 
      return{
        ...preVal,
        [name] :value
      }
    })
  }


  const form_Submit = (e) => { 
    e.preventDefault();
    alert(`my full name is ${data.fname}`);
  }

  return (
    <>
      {/* <Common name = 'welcome to Contact us page!!' btnName = 'message us' imgsrc = {imgg}/> */}
      <div className = 'my-5'>
        <h1 className = 'text-center'>Contact us 😃 ☎️ !!</h1>
      </div>
      <div className ='container contact_div'>
        <div className ='row'>
          <div className = 'col-md-6 col-10 mx-auto'>
            <form onSubmit = {form_Submit}>
              <div className ="form-group">
                <label className = "fname"
                for="exampleFormControlInput1">Full Name :</label>
                <input className ="form-control my-2 fname_input" 
                id="exampleFormControlInput1" 
                name = 'fname'
                value = {data.fname}
                onChange = {InputEvent}
                placeholder="Enter Your Full Name"/>
              </div>
              
              <div className ="form-group_email">
                <label  className = "email my-2 "
                for="exampleFormControlInput1">Email :  </label>
                <input className ="form-control my-2 email_input" 
                id="exampleFormControlInput1" 
                name = 'email'
                value = {data.email}
                onChange = {InputEvent}
                placeholder="Enter Your Email-id"/>
              </div>

              <div className="form-group-feedback">
                <label className = 'my-2 lbl_feedback' 
                for="exampleFormControlTextarea1">FeedBack :</label>
                <textarea className="form-control feedback" 
                id="exampleFormControlTextarea1" 
                rows="3" 
                name = 'feedback'
                value = {data.feedback}
                onChange = {InputEvent}
                placeholder = "Enter your Feedback">
                </textarea>
              </div>

              <div className = 'div_submit text-center'>
              <button type="submit" 
              className ="btn btn_submit btn-outline-primary my-4">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;