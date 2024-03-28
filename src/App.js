import { Route, Routes } from "react-router-dom";
import { Login } from "./components";
import { AuthProvider } from "./providers";
import ProtectedRoute from "./ProtectedRoute";
import { SignUp } from "./pages/signup";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/dashboard" element={<ProtectedRoute> <h1> Hello </h1></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;