import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [authenticationStatus, setAuthenticationStatus] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticationStatus({
          user,
          isAuthenticated: !!user,
          isLoading: false,
        });
      } else {
        setAuthenticationStatus({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setAuthenticationStatus({ ...authenticationStatus, isLoading: true });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAuthenticationStatus({
        user: userCredential.user,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const signup = async (email, password, displayName) => {
    setAuthenticationStatus({ ...authenticationStatus, isLoading: true });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, { displayName });
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const logout = async () => {
    setAuthenticationStatus({ ...authenticationStatus, isLoading: true });
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const updateUserInfo = async (displayName, photoURL = null) => {
    setAuthenticationStatus({ ...authenticationStatus, isLoading: true });
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName, photoURL });
      }
    } catch (error) {
      console.error("Error updating user info:", error.message);
    }
  };

  const loginWithGoogle = async () => {
    setAuthenticationStatus({ ...authenticationStatus, isLoading: true });
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const contextData = {
    authenticationStatus,
    login,
    signup,
    logout,
    updateUserInfo,
    loginWithGoogle,
  };

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, ContextProvider };
