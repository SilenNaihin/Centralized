import React from "react";
import Link from 'next/link';
import Googleauth from 'components/Auth/Gauth';

export default function ResetPass(): JSX.Element {
    return (
        <>
        <div className="flex justify-center mt-14 mb-6 h-20 items-center">
        <div className="bg-gray-300 h-px w-1/6"></div>
        <h1 className="text-center text-4xl mx-4">Centralized</h1>
        <div className="bg-gray-300 h-px w-1/6"></div>
      </div>
      <p className="text-center mb-14"> Create and maintain relationships</p>
      <div className="bg-white mx-auto w-1/3 rounded-lg py-6 custom_shadow">
        <input
          className="block mx-auto border-b border-black mb-8 w-4/5"
          type="text"
          placeholder="Email"
        />
        <button type="submit" className="focus:outline-none flex bg-gradient-to-r from-blue-400 to-blue-800 justify-center items-center w-1/2 h-9 rounded-xl mx-auto text-gray-50">
          <p>Get reset link</p> {/*------------------ DO SOMETHING HERE ------------------*/}
        </button>
        <div className="focus:outline-none flex mb-6 underline text-xs justify-center">
            <Link href="./login">
                <button className="mr-2">Back to login</button>
            </Link>
        </div>
        <Googleauth>
            <img className="mr-3 h-6" src="/images/Google.png" />
            <div className="text-center">Sign up with Google</div>
        </Googleauth>
        <button>
        </button>
      </div>
        </>
    );
  }