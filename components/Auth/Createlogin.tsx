import firebase from "firebase/app"
import authClient from "firebase/authClient"
import {useRouter} from 'next/router'


// const Googleauth = () => {
//     const router = useRouter()
//     return(
//         <>
//         <button
//         onClick={async () => {
//             const provider = new firebase.auth.GoogleAuthProvider()
//             await authClient.signInWithRedirect(provider)
//         router.push('/')
//         }}>
//         </button>
//         </>
//     );
// }

// export default Googleauth;