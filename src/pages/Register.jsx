import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import SettingsButton from '../components/SettingsButton';

const Register = () => {
  // ... existing code ...

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* ... existing JSX ... */}
      <SettingsButton />
    </div>
  );
};

export default Register;