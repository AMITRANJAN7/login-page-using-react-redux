import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectUser,logout } from '../features/userSlice';

const Logout = () => {

const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault();
         
        dispatch(logout());
    }


  return (
    <div className='text-center mt-8'>
      <h1 className='text-xl mb-4'>
        Welcome <span className='text-blue-500 font-bold'>{user.name}</span>
        <button className='ml-4 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600' onClick={(e) => handleLogout(e)}>Logout</button>
      </h1>
    </div>
  );
};

export default Logout;
