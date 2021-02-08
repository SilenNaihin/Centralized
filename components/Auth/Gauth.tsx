import firebase from "firebase/app"
import authClient from "firebase/authClient"
import router from 'next/router'
import { ReactNode } from "react"


function Googleauth({children}:{children: ReactNode}): JSX.Element {
    return (
        <>
            <button className="focus:outline-none flex items-center w-1/2 h-9 justify-center mx-auto rounded-xl border-black border border-gray-200"
                onClick={async () => {
                    const provider = new firebase.auth.GoogleAuthProvider()
                    await authClient.signInWithRedirect(provider)
                    router.push('/')
                } }>
                    {children}
            </button>
        </>
    )
}

export default Googleauth;

