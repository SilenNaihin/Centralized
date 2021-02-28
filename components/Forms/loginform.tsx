import authClient from "firebase/authClient";
import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from 'react-hook-form';

interface SignUpData {
    name: string;
    email: string;
    password: string;
   }

export default function LoginForm(): JSX.Element {
    const {register, errors, handleSubmit} = useForm();
    const auth = useAuth();
    const router = useRouter();

    // what to de when you submit
    const onSubmit = (data: SignUpData) => {
        return auth.signIn(data).then(() => {
            router.push('/dashboard')
        });
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
        {/* Password */}
            <label htmlFor="password"></label>
            <input
                className="block mx-auto border-b border-black w-4/5 mb-4"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                ref={register({
                    required: 'Please enter a password',
                    minLength: {
                     value: 6,
                     message: 'Password should have at least 6 characters',
                    },
                   })}
            />
            {errors.password && (
                <div className="mt-2 text-xs text-red-600 mb-4 text-center">
                {errors.password.message}
                </div>
            )}
            <button 
                type="submit" 
                className="focus:outline-none flex bg-gradient-to-r from-blue-400 to-blue-800 justify-center items-center w-1/2 h-9 rounded-xl mx-auto text-gray-50"
            >
                Continue with email
            </button>
    </form>
    </>
    )
}