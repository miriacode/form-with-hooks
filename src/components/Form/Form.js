import React, {useState} from 'react';

const Form = () => {
   const [firstName,setFirstName] = useState("");
   const [lastName,setLastName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [confirm,setConfirm] = useState("");

  return (
    <>
      <form>
        <div className='form-group'>
          <label htmlFor="firstName">First name:</label>
          <input id="firstName" className="form-control" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
        </div>

        <div className='form-group'>
          <label htmlFor="lastName">Last name:</label>
          <input id="lastName" className="form-control" onChange={(e)=>setLastName(e.target.value)} value={lastName} />
        </div>

        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input id="email" className="form-control" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>

        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input id="password" className="form-control" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        </div>

        <div className='form-group'>
          <label htmlFor="confirm">Confirm Password:</label>
          <input id="confirm" className="form-control" type="password" onChange={(e)=>setConfirm(e.target.value)} value={confirm} />
        </div>
      </form>

      <h4>Your Form Data</h4>
      <label>First Name:</label>
      <p>{firstName}</p>
      <label>Last Name:</label>
      <p>{lastName}</p>
      <label>Email:</label>
      <p>{email}</p>
      <label>Password:</label>
      <p>{password}</p>
      <label>Confirm:</label>
      <p>{confirm}</p>
    </>
    );
}

export default Form;


