import React,{useState , useEffect } from 'react';
import axios from 'axios';
import IP from '../constants/ip'
import '../components/css/Checkout.css'
const Checkout = (props) => {
    const [streetName, setStreetName] = useState(null);
    const [houseNumber, setHouseNumber] = useState(null);
    const [postCode, setPostCode] = useState(null);
    const [city, setCity] = useState(null);
    const [floor, setFloor] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [addName, setAddName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
useEffect ( () =>{

},[])

    
 const send = () =>{
    console.log(props.items);
     axios.post(`${IP}/api/commandes/addCommande`,
            {
                email:email,
                userName:userName,
                items:props.items,
                dateAndTime:new Date(),
                streetName:streetName,
                houseNumber:houseNumber,
                postecode:postCode,
                city:city,
                floor:floor,
                companyName:companyName,
                addName:addName,
                phoneNumber:phoneNumber,
            })
            .then(res=>{
                console.log(res.data);
            })
 }

  return (
    <section id='section1'>
        <section>
            <h3>Checkout</h3>
            {/* <div>pizza</div> */}
            <div id='container'>
                <form class="row g-3" >
                    <h3 id='title'>Delivery adresse </h3>
                    <div class='form'>
                        <div class="col-md-6">
                        <label for="label4" class="form-label">Street name</label>
                        <input class="form-control" id="label4" placeholder='Type street name'
                         onChange={(e) => {
                            console.log(e.target.value);
                            setStreetName(e.target.value)}}/>
                        </div>
                        <div>
                            <div>House number</div>
                            <label  class="label-delivery">
                            <input class="form-control" placeholder='Type house number'
                             onChange={(e) => {
                                console.log(e.target.value);
                                setHouseNumber(e.target.value)}}/>
                            </label>
                        </div>
                        <div>
                            <div>Postcode</div>
                            <input class="form-control" placeholder='Type post code'
                             onChange={(e) => {
                                console.log(e.target.value);
                                setPostCode(e.target.value)}}/>
                            <label  class="label-delivery"></label>
                        </div>
                        <div>
                            <div>City</div>
                            <input class="form-control" placeholder='Type city name'
                             onChange={(e) => {
                                console.log(e.target.value);
                                setCity(e.target.value)}}/>
                            <label  class="label-delivery"></label>
                        </div>
                        <div>
                            <div>Floor (optional)</div>
                            <input class="form-control" placeholder='Type floor number'
                             onChange={(e) => {
                                console.log(e.target.value);
                                setFloor(e.target.value)}}/>
                            <label  class="label-delivery"></label>
                        </div>
                        <div>
                            <div>Company name (optional)</div>
                            <input class="form-control" placeholder='type company number'
                             onChange={(e) => {
                                console.log(e.target.value);
                                setCompanyName(e.target.value)}}/>
                            <label  class="label-delivery"></label>
                        </div>
                        <div>
                            <div>
                            <div>Add note (optional)</div>
                            <input class="form-control" placeholder="ei: Please don't ring the bell. Babe is sleeping. "
                             onChange={(e) => {
                                console.log(e.target.value);
                                setAddName(e.target.value)}}/>
                            <label  class="label-delivery"></label>
                            <div>160/160</div>
                            </div>
                        </div>
                    </div>
                </form>
                <hr />
                <form  >
                    <h3>Personal Details</h3>
                    <div class='form'>
                        <div>
                            <div>Username</div>
                            <input class="form-control" placeholder='Type username'
                             onChange={(e) => {
                                console.log(e.target.value);
                                setUserName(e.target.value)}}/>
                            <label  class="label-delivery"></label>
                        </div>
                        <div>
                            <div>E-mail</div>
                            <input class="form-control" placeholder='Type Email'
                             onChange={(e) => {
                                console.log(e.target.value);
                                setEmail(e.target.value)}}/>
                            <label  class="label-delivery"></label>
                        </div>
                        <div>
                            <div>Phone Number</div>
                            <input class="form-control" placeholder='Type phone number'
                             onChange={(e) => {
                                console.log(e.target.value);
                                setPhoneNumber(e.target.value)}}/>
                            <label  class="label-delivery"></label>
                        </div>
                    </div>
                    <div>When placing an order, you will receive a confirmation, Food Tracker status messages and a request to review the restaurant via email or otherwise (such as push messages).</div>
                </form>
                
            </div>
        </section>
        <div>
        <button  type="button" class="btn btn-primary" id='send' onClick={send}>order & pay with cash ({props.total} $)</button>
        </div>
    </section>
  )
}

export default Checkout;