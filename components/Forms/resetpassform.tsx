import React from "react";
import { useForm } from 'react-hook-form';

interface SignUpData {
    name: string;
    email: string;
    password: string;
   }

export default function ResetPassForm(): JSX.Element {
    const {register, errors, handleSubmit} = useForm();

    // what to de when you submit
    const onSubmit = (data: SignUpData) => {
        console.log(data);
    };

    return (
        <>
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
            <label htmlFor="email"></label>  
            <input
                className="block mx-auto border-b border-black w-4/5 mb-4"
                type="email"
                placeholder="Email"
                id = "email"
                name="email"
                ref={register({
                    required: 'Please enter an email',
                    pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                     message: 'Not a valid email',
                    },
                   })}
            />
            {errors.email && (
                <div className="mt-2 text-xs text-red-600 mb-4 text-center">
                {errors.email.message}
                </div>
            )}
            <button 
                type="submit" 
                className="focus:outline-none flex bg-gradient-to-r from-blue-400 to-blue-800 justify-center items-center w-1/2 h-9 rounded-xl mx-auto text-gray-50"
            >
                Get reset password link
            </button>
    </form>
    </>
    )
}