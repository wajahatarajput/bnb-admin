import { Route, Routes } from "react-router-dom";
import { Login } from "./components";
import { AuthProvider } from "./providers";
import ProtectedRoute from "./ProtectedRoute";
import { SignUp } from "./pages/signup";
import { CreateCourse } from "./pages/course";
import { AddStudent } from "./pages/students";
import { AddTeacher } from "./pages/teacher";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/dashboard" element={<ProtectedRoute> <h1> Hello </h1></ProtectedRoute>} />
        <Route exact path="/createcourse" element={<ProtectedRoute> <CreateCourse /></ProtectedRoute>} />
        <Route exact path="/addstudent" element={<ProtectedRoute> <AddStudent /> </ProtectedRoute>} />
        <Route exact path="/addteacher" element={<ProtectedRoute> <AddTeacher /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;