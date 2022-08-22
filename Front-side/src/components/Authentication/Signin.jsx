import React,{useState} from 'react'
import axios from 'axios'
import IP from '../../constants/ip'
import { BsChevronLeft} from "react-icons/bs";

const Signin = (props) => {
  const [email,setEmail]=useState(null);
  const [pwd, setPwd] = useState(null);
  const send=()=>{
    let params={
      email:email,
      userPassword:pwd
    }
    console.log(params);
    axios.post(`${IP}/api/user/signIn`,params)
    .then(res=>{
      console.log(res.data);
      if(res.data[0]=='connected')
      localStorage.setItem('user',JSON.stringify(res.data[1]))
      props.setUser(res.data[1])
      props.setToggel(4)
      setTimeout(()=>window.location.reload(),3000);
    })
  }

  return (
    <div className='main-signin'>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div className='modal-header'>
      <span><BsChevronLeft fontSize={"20px"}   onClick={()=>props.setToggel(0)} /></span>
     
      <h3 className='title-sign'  >Sign in</h3>
      </div>
  
      <div className="mb-3">
        <label className='label'>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />
      </div>
      <div className="mb-3">
        <label className='label'>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e)=>{
            setPwd(e.target.value)
          }}
        />
      </div>
  
      <div className="d-gri">
        <button type="submit" className=" btn-prim"
        onClick={send}
        >
          Submit
        </button>
      </div>
     
        <a className="signin-account" href="#">Forget password?</a>
          
      </div>
      </div>
  </div>
  )
}

export default Signin