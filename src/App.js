import { useEffect } from "react";
import SignUp from "./Components/SignUp/SignUp";


function App() {
  useEffect(() => {
    document.body.style.height = "100vh";
  }, [])


  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
