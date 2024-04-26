import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { login } from '../features/userSlice';
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here

    

    dispatch(login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
    }));
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3' onSubmit={(e)=>handleSubmit(e)}>
        <h1 className='text-2xl mb-6 text-center font-bold'>Login</h1>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Name</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='flex items-center justify-center'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
