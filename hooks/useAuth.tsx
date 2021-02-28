import {useState, useEffect, useContext, createContext, ReactNode} from 'react';
import auth from "firebase/authClient"
import db from "firebase/firestorage"
import route from "next/router"
import firebase from "firebase/index"

const authContext = createContext({ user: {} });
const { Provider } = authContext;

function AuthProvider(props: {children:ReactNode}): JSX.Element {
    const auth = useAuthProvider();
    return <Provider value={auth}>{props.children}</Provider>;
}

export const useAuth: any = () => {
    return useContext(authContext)
} 

const useAuthProvider = () => {
    const [user, setUser] = useState(null);

    const createUser = (user) => {
        return db
            .collection('users')
            .doc(user.uid)
            .set(user)
            .then (() => {
                setUser(user);
                return route.push('/dashboard');
            })
        .catch ((error) => {
            return {error};
        });
    };

    const handleAuthStateChanged = (user: firebase.User) => {
        setUser(user);
        if (user) {
            getUserAdditionalData(user);
        }
    };

    useEffect (() => {
        if (user?.uid) {
            const unsubscribe = db
            .collection('users')
            .doc('user.uid')
            .onSnapshot((doc) => setUser(doc.data()))
        
        return () => unsubscribe();
        }
    }, []);

    useEffect (() => {
        const unsub = auth.onAuthStateChanged(handleAuthStateChanged);

        return () => unsub();
    }, [])

    const signUp = ({name, email, password}) => {
        return auth 
        .createUserWithEmailAndPassword(email,password)
        .then((response)=> {
            return createUser({uid: response.user.uid, email, name})
        })
        .catch((error)=> {
            return {error};
        });
    };

    const getUserAdditionalData = (user: firebase.User) => {
        return db 
        .collection('users')
        .doc('user.uid')
        .get()
        .then((userData) => {
            setUser(userData.data());
        });
    }

    const signIn = ({ email, password}) => {
        return auth
        .signInWithEmailAndPassword(email,password)
        .then((response) => {
            setUser(response.user)
            getUserAdditionalData(user)
            return response.user
        })
        .catch((error) => {
            return {error};
        });
    };

    return {
        user,
        signUp,
        signIn,
    };

}

export default AuthProvider;