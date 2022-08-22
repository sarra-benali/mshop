import React,{useState} from 'react'
import '../Modal/Modal.css'
import IP from '../../constants/ip'
import axios from 'axios'
import { BsChevronLeft} from "react-icons/bs";
import Signin from './Signin';
const Signup = (props) => {

const [username, setUsername] = useState(null)
const [email, setEmail] = useState(null)
const [pwd, setPwd] = useState(null)
const [confirm, setConfirm] = useState(null)
const [toggle, setToggel] = useState(0);

const send = () => {
  if(pwd===confirm){
    let params ={
      username:username,
      email:email,
      userPassword:pwd,
    
     }
     axios.post(`${IP}/api/user/signUp`, params)
     .then(res=>{
      console.log(res.data);
      if(res.data == "The user has been registered with us !"){
        props.setToggel(1)
      }
     })
  }
 
}



  return (
    <div className="sign">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div className='modal-header'>
      <span><BsChevronLeft fontSize={"20px"}   onClick={()=>props.setToggel(0)} /></span>
      <h1 className='title-sign'>create account</h1>
      </div>
        <div className="mb-3">
          <label className='label'>username</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label className='label'>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className='label'>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className='label'>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter confirm password"
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
    
        <div className="footer_signup">
          <button type="submit" className=" btn-prim" onClick={send}>
            create account
          </button>
         
          <a href="#" className="signin-account" onClick={() => setToggel(1)}>I already have an account?</a>
          {toggle == 1 && (
                <Signin setToggel={setToggel} setUser={props.setUser} />
              )}
        </div>
       
        </div>
        </div>
    </div>
  )
}

export default Signup;