import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const GoogleSignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p className='text-center'>User Registered!</p>
          </div>
        );
      }
    return (
        <div>
           <Button className='btn btn-deafult w-100' onClick={() => signInWithGoogle()} type="submit" >Continue With Google</Button> 
        </div>
    );
};

export default GoogleSignUp;