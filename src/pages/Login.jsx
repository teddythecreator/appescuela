import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import SettingsButton from '../components/SettingsButton';

const Login = () => {
  // ... existing code ...

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* ... existing JSX ... */}
      <SettingsButton />
    </div>
  );
};

export default Login;