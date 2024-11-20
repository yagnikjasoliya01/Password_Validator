import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  const checkStrength = (value) => {
    let strengthLevel = 0;

    // Check criteria
    if (value.length >= 6) strengthLevel++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strengthLevel++;
    if (/\d/.test(value)) strengthLevel++;
    if (/[@$!%*?&]/.test(value)) strengthLevel++;

    setStrength(strengthLevel);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  const getStrengthLabel = () => {
    switch (strength) {
      case 1:
        return "Good";
      case 2:
        return "Very Good";
      case 3:
        return "Strong";
      case 4:
        return "Excellent";
      default:
        return "";
    }
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-yellow-500";
      case 3:
        return "bg-blue-500";
      case 4:
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Password Validator</h2>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Strength Meter */}
        <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-4">
          <div
            className={`h-full ${getStrengthColor()} transition-all`}
            style={{ width: `${(strength / 4) * 100}%` }}
          ></div>
        </div>

        {/* Strength Label */}
        <div
          className={`text-center text-lg font-semibold ${
            strength === 4
              ? "text-green-600"
              : strength === 3
              ? "text-blue-600"
              : strength === 2
              ? "text-yellow-500"
              : strength === 1
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {getStrengthLabel() && `Strength: ${getStrengthLabel()}`}
        </div>
      </div>
    </div>
  );
}

export default App
