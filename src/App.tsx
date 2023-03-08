import { useState } from "react";
import "./App.css";
import OtpInput from "./components/otpInput";

function App() {
  const [otp, setOtp] = useState("");
  const onChange = (value: string) => setOtp(value);

  return (
    <div className="App">
      <h1 className="">OTP Test</h1>
      <form id="otp" className="w-80">
        <OtpInput value={otp} valueLength={6} onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
