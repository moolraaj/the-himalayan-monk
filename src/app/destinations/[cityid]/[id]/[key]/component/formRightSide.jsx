'use client';
// import React, { useState } from 'react';
// import airplane from '../../../../../assets/homepageAssets/airplane.gif';

// const BookTourForm = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     destination: '',
//     total_no_travelers: '',
//     departuredate: '',
//     returndate: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(user);

//     const data = {
//       name: user.name,
//       email: user.email,
//       mobile: user.mobile,
//       destination: user.destination,
//       total_no_travelers: user.total_no_travelers,
//       departuredate: user.departuredate,
//       returndate: user.returndate,
//       adminEamil: 'sales@eligocs.com'
//     };

//     try {
//       const resp = await fetch(`https://staging.trackitinerary.com/apis/query/savequery`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       const responseJson = await resp.json();
//       console.log(responseJson);

//       setUser({
//         name: '',
//         email: '',
//         mobile: '',
//         destination: '',
//         total_no_travelers: '',
//         departuredate: '',
//         returndate: ''
//       });
//     } catch (error) {
//       console.error('Failed to submit form', error);
//     }
//   };

//   return (
//     <div className="form-container-custom">
//       <h2>Book A Tour</h2>
//       <p>Reserve your ideal trip early for a hassle-free trip; secure comfort and convenience!</p>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" value={user.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Email Id</label>
//           <input type="text" name="email" value={user.email} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone Number</label>
//           <input type="text" name="mobile" value={user.mobile} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Where Would You Like To Travel</label>
//           <input type="text" name="destination" value={user.destination} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>The Number Of Travelers</label>
//           <input type="text" name="total_no_travelers" value={user.total_no_travelers} onChange={handleChange} required />
//         </div>  
//         <div className="form-group">
//           <label>Departure Date</label>
//           <input type="text" name="departuredate" value={user.departuredate} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Return Date</label>
//           <input type="text" name="returndate" value={user.returndate} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="submit-btn">
//           Book Now <img src={airplane.src} alt="demo" style={{ width: '28px' }} />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookTourForm;



import React, { useState } from 'react'

function BookTourForm() {
  let [user,setUser]=useState({
    name:'',
    email:'',
    mobile:'',
    destination:'',
    total_no_travelers:'',
    departuredate:'',
    returndate:'',
    adminEamil:'',

  })

  const getUserdetails=(e)=>{
     setUser({...user,[e.target.name]:e.target.value})
  }


  const submitUserForm=async(e)=>{
    console.log(e)

    console.log(user.name)
      

    let formData=new FormData()

    formData.append('name',user.name)
    formData.append('email',user.email)
    formData.append('mobile',user.mobile)
    formData.append('destination',user.destination)
    formData.append('total_no_travelers',user.total_no_travelers)
    formData.append('departuredate',user.departuredate)
    formData.append('returndate',user.returndate,)
    formData.append('adminEamil',user.adminEamil)


    let url=await fetch(`https://staging.trackitinerary.com/apis/query/savequery`,{
      method:'POST',
      body:formData,
      headers:{
        "Content-Type":"application/json"
      }
    })
    let resp=await url.json()

    console.log(resp)
    setUser({
      name:'',
      email:'',
      mobile:'',
      destination:'',
      total_no_travelers:'',
      departuredate:'',
      returndate:'',
      adminEamil:'',
  
    })

  }



  return (
     <>
     <div>

     <input type="text" name="name" id="" value={user.name} onChange={getUserdetails}/><br/>
     <input type="text" name="email" id="" value={user.email} onChange={getUserdetails}/><br/>
     <input type="text" name="mobile" id="" value={user.mobile} onChange={getUserdetails}/><br/>
     <input type="text" name="destination" id="" value={user.destination} onChange={getUserdetails}/><br/>
     <input type="text" name="total_no_travelers" id="" value={user.total_no_travelers} onChange={getUserdetails}/><br/>
     <input type="text" name="departuredate" id="" value={user.departuredate} onChange={getUserdetails}/><br/>
     <input type="text" name="returndate" id="" value={user.returndate} onChange={getUserdetails}/><br/>
     <input type="text" name="adminEamil" id="" value={user.adminEamil} onChange={getUserdetails}/><br/>
     <button onClick={submitUserForm}>submit</button>
     </div>
     </>
  )
}

export default BookTourForm

