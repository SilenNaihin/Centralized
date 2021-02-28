import React from "react";
import Googleauth from 'components/Auth/Gauth';
import Link from 'next/link';
import LoginForm from 'components/Forms/loginform'


export default function Login(): JSX.Element {

  return (
    <>
      <div className="flex justify-center mt-14 mb-6 h-20 items-center">
        <div className="bg-gray-300 h-px w-1/6"></div>
        <h1 className="text-center text-4xl mx-4">Centralized</h1>
        <div className="bg-gray-300 h-px w-1/6"></div>
      </div>
      <p className="text-center mb-14"> Create and maintain relationships</p>
      <div className="bg-white mx-auto w-1/3 rounded-lg py-6 custom_shadow">
          <LoginForm/>
        <div className="focus:outline-none flex mb-6 underline text-xs justify-center">
           <Link href="./signup">
                <button className="mr-2" >Sign Up</button>
            </Link>
            <Link href="./resetpass">
                <button className="ml-2">Reset Password</button>
            </Link>
        </div>
        <Googleauth>
            <img className="mr-3 h-6" src="/images/Google.png" />
            <div className="text-center">Continue with Google</div>
        </Googleauth>
      </div>
    </>
  )
}
