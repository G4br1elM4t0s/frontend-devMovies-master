import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Movies from "./pages/Movies";
import MyMovies from "./pages/MyMovies";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Historic from "./pages/Historic";
import Admin from "./pages/Admin";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mymovies/:id" element={<MyMovies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
