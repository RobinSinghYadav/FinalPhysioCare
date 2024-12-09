// import React, { useContext, useState } from 'react'
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {

//   const {backendUrl,token,setToken}= useContext(AppContext)
  

//   const [state,setState]= useState('Sign Up')

//   const [email,setEmail]= useState('')
//   const [password,setPassword]= useState('')
//   const [name,setName]= useState('')
//   const [mobile, setMobile] = useState('')

//   const onSubmitHandler = async (event)=>{
//     event.preventDefault()
// try{
//   if(state=='sign Up'){
//     const {data}= await axios.post(backendUrl + '/api/user/register',{name,password,email})
//     if(data.success){
//       localStorage.setItem('token',data.token)
//       setToken(data.token)
//     }
//     else{
//       toast.error(data.message)
//     }
//   }
//   else{
//     const {data}= await axios.post(backendUrl + '/api/user/login',{password,email})
//     if(data.success){
//       localStorage.setItem('token',data.token)
//       setToken(data.token)
//     }
//     else{
//       toast.error(data.message)
//     }
//   }
//   }

// catch(error){
//   toast.error(error.message)
// }
//   }
//   return (
//     <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
//       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
//         <p>{state=== 'Sign Up' ? "Create Account" : "Login"}</p>
//         <p>Please {state=== 'Sign Up' ? "Create Account" : "Login in "} to Book Your Appointment</p>
//         <div>
//         <p>Full Name</p>
//         <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
//         </div>
//         <div>
//         <p>Email</p>
//         <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
//         </div>
//         <div>
//         <p>Password</p>
//         <input type="passsword" onChange={(e)=>setPassword(e.target.value)} value={password} />
//         </div>
//         <div>
//         <p>Mobile No.</p>
//         <input type="text" onChange={(e)=>setMobile(e.target.value)} value={mobile} />
//         </div>
//         <button 
//         type="submit" onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}>
//               {state === 'Sign Up' ? 'Switch to Login' : 'Switch to Sign Up'}
//         </button>

//       </div>

//     </form>
    
//   )
// }

// export default Login


/*--------------------------END---------------------------------------*/

// import React, { useState } from 'react';

// const Login = () => {
//   const [state, setState] = useState('Sign Up');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//   };

//   return (
//     <form className='min-h-[80vh] flex items-center justify-center'>
//       <div className='flex flex-col gap-4 p-8 min-w-[340px] sm:min-w-96 border rounded-xl bg-white text-zinc-600 text-sm shadow-md'>
//         {/* Title and Subtitle */}
//         <p className='text-xl font-semibold text-center'>
//           {state === 'Sign Up' ? 'Create Account' : 'Login'}
//         </p>
//         <p className='text-sm text-center mb-4'>
//           Please {state === 'Sign Up' ? 'Create Account' : 'Login'} to Book Your Appointment
//         </p>

//         {/* Full Name Input */}
//         <div className='flex flex-col'>
//           <label className='text-base font-medium'>Full Name</label>
//           <input
//             className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//             type="text"
//             placeholder="Enter your full name"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//           />
//         </div>

//         {/* Email Input */}
//         <div className='flex flex-col'>
//           <label className='text-base font-medium'>Email</label>
//           <input
//             className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//             type="email"
//             placeholder="Enter your email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//         </div>

//         {/* Password Input */}
//         <div className='flex flex-col'>
//           <label className='text-base font-medium'>Password</label>
//           <input
//             className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//             type="password"
//             placeholder="Enter your password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//         </div>

//         {/* Mobile Number Input */}
//         <div className='flex flex-col'>
//           <label className='text-base font-medium'>Mobile No.</label>
//           <input
//             className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//             type="text"
//             placeholder="Enter your mobile number"
//             onChange={(e) => setMobile(e.target.value)}
//             value={mobile}
//           />
//         </div>

//         {/* Toggle Button */}
//         <button
//           className='bg-blue-500 text-white font-medium p-2 rounded-md hover:bg-blue-600 transition-colors'
//           type="button"
//           onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
//         >
//           {state === 'Sign Up' ? 'Switch to Login' : 'Switch to Sign Up'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Login;


// import React, { useState } from 'react';

// const Login = () => {
//   const [state, setState] = useState('Sign Up');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [countryCode, setCountryCode] = useState('+1'); // Default country code

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     // Handle form submission logic here (e.g., API calls)
//     if (state === 'Sign Up') {
//       console.log('Creating Account:', { name, email, password, mobile: countryCode + mobile });
//     } else {
//       console.log('Logging In:', { email, password });
//     }
//   };

//   return (
//     <form className='min-h-[80vh] flex items-center justify-center' onSubmit={onSubmitHandler}>
//       <div className='flex flex-col gap-4 p-8 min-w-[340px] sm:min-w-96 border rounded-xl bg-white text-zinc-600 text-sm shadow-md'>
//         {/* Title and Subtitle */}
//         <p className='text-xl font-semibold text-center'>
//           {state === 'Sign Up' ? 'Create Account' : 'Login'}
//         </p>
//         <p className='text-sm text-center mb-4'>
//           Please {state === 'Sign Up' ? 'Create Account' : 'Login'} to Book Your Appointment
//         </p>

//         {/* Full Name Input (only for Sign Up) */}
//         {state === 'Sign Up' && (
//           <div className='flex flex-col'>
//             <label className='text-base font-medium'>Full Name</label>
//             <input
//               className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//               type="text"
//               placeholder="Enter your full name"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//             />
//           </div>
//         )}

//         {/* Email Input */}
//         <div className='flex flex-col'>
//           <label className='text-base font-medium'>Email</label>
//           <input
//             className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//             type="email"
//             placeholder="Enter your email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//         </div>

//         {/* Password Input */}
//         <div className='flex flex-col'>
//           <label className='text-base font-medium'>Password</label>
//           <input
//             className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//             type="password"
//             placeholder="Enter your password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//         </div>

//         {/* Mobile Number Input with Country Code Dropdown (only for Sign Up) */}
//         {state === 'Sign Up' && (
//           <div className='flex flex-col'>
//             <label className='text-base font-medium'>Mobile No.</label>
//             <div className='flex items-center gap-2'>
//               <select
//                 className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 value={countryCode}
//                 onChange={(e) => setCountryCode(e.target.value)}
//               >
//                 <option value='+1'>+1 (USA)</option>
//                 <option value='+91'>+91 (India)</option>
//                 <option value='+44'>+44 (UK)</option>
//                 <option value='+61'>+61 (Australia)</option>
//                 {/* Add more country codes as needed */}
//               </select>
//               <input
//                 className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//                 type="text"
//                 placeholder="Enter your mobile number"
//                 onChange={(e) => setMobile(e.target.value)}
//                 value={mobile}
//               />
//             </div>
//           </div>
//         )}

//         {/* Submit Button */}
//         <button
//           className='bg-blue-500 text-white font-medium p-2 rounded-md hover:bg-blue-600 transition-colors'
//           type="submit"
//         >
//           {state === 'Sign Up' ? 'Create Account' : 'Login'}
//         </button>

//         {/* Toggle Button */}
//         <button
//           className='text-blue-500 font-medium p-2 mt-2'
//           type="button"
//           onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
//         >
//           {state === 'Sign Up' ? 'Already have an Account? Switch to Login' : 'Switch to Sign Up'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Login;

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const countryCodes = [
  { code: '+93', country: 'Afghanistan' },
  { code: '+355', country: 'Albania' },
  { code: '+213', country: 'Algeria' },
  { code: '+376', country: 'Andorra' },
  { code: '+244', country: 'Angola' },
  { code: '+1', country: 'United States' },
  { code: '+54', country: 'Argentina' },
  { code: '+61', country: 'Australia' },
  { code: '+43', country: 'Austria' },
  { code: '+91', country: 'India' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+86', country: 'China' },
  { code: '+33', country: 'France' },
  { code: '+49', country: 'Germany' },
  { code: '+81', country: 'Japan' },
  { code: '+39', country: 'Italy' },
  { code: '+52', country: 'Mexico' },
  { code: '+47', country: 'Norway' },
  { code: '+92', country: 'Pakistan' },
  { code: '+351', country: 'Portugal' },
  { code: '+7', country: 'Russia' },
  { code: '+65', country: 'Singapore' },
  { code: '+27', country: 'South Africa' },
  { code: '+34', country: 'Spain' },
  { code: '+46', country: 'Sweden' },
  { code: '+41', country: 'Switzerland' },
  { code: '+90', country: 'Turkey' },
  { code: '+971', country: 'United Arab Emirates' },
  // Add more country codes as needed
];

const Login = () => {

  const {backendUrl,token,setToken}= useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., API calls)

    // if (state === 'Sign Up') {
    //   console.log('Creating Account:', { name, email, password, mobile: countryCode + mobile });
    // } else {
    //   console.log('Logging In:', { email, password });
    // }

    try{
      if(state=='Sign Up'){
        const {data}= await axios.post(backendUrl + '/api/user/register',{name,password,email})
        if(data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }
        else{
          toast.error(data.message)
        }
      }
      else{
        const {data}= await axios.post(backendUrl + '/api/user/login',{password,email})
        if(data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }
        else{
          toast.error(data.message)
        }
      }
      }
    
    catch(error){
      toast.error(error.message)
    }

   
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])



  return (
    <form className='min-h-[80vh] flex items-center justify-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-4 p-8 min-w-[340px] sm:min-w-96 border rounded-xl bg-white text-zinc-600 text-sm shadow-md'>
        {/* Title and Subtitle */}
        <p className='text-xl font-semibold text-center'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p className='text-sm text-center mb-4'>
          Please {state === 'Sign Up' ? 'Create Account' : 'Login'} to Book Your Appointment
        </p>

        {/* Full Name Input (only for Sign Up) */}
        {state === 'Sign Up' && (
          <div className='flex flex-col'>
            <label className='text-base font-medium' >Full Name</label>
            <input
              className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder="Enter your full name" required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}

        {/* Email Input */}
        <div className='flex flex-col'>
          <label className='text-base font-medium'>Email</label>
          <input
            className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="email"
            placeholder="Enter your email" required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password Input */}
        <div className='flex flex-col'>
          <label className='text-base font-medium'>Password</label>
          <input
            className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="password"
            placeholder="Enter your password" required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

{/* Mobile Number Input with Country Code Dropdown (only for Sign Up) */}
{state === 'Sign Up' && (
  <div className='flex flex-col'>
    <label className='text-base font-medium'>Mobile No.</label>
    <div className='flex items-center gap-2'>
      <select
        className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      >
        {countryCodes.sort((a, b) => a.country.localeCompare(b.country)).map((country) => (
          <option key={country.code} value={country.code}>
            {`${country.code} (${country.country})`}
          </option>
        ))}
      </select>
      <input
        className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        type="text"
        placeholder="Enter your mobile number" required
        onChange={(e) => {
          const value = e.target.value;
          // Allow only numbers and limit the length to 10 digits
          if (/^\d*$/.test(value) && value.length <= 10) {
            setMobile(value);
          }
        }}
        value={mobile}
        maxLength={10} // Limit input length to 10 characters
      />
    </div>
  </div>
)}


        {/* Submit Button */}
        <button
          className='bg-blue-500 text-white font-medium p-2 rounded-md hover:bg-blue-600 transition-colors'
          type="submit"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle Button */}
        <button
          className='text-blue-500 font-medium p-2 mt-2'
          type="button"
          onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
        >
          {state === 'Sign Up' ? 'Already have an Account? Switch to Login' : 'Switch to Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default Login;
