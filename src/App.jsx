import { LoginPage } from "./components"
import HomePage from "./pages/HomePage"
import { Paper } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  return (
    <BrowserRouter>
      <Paper style={{ height: "100vh" }}>
        <Routes>
          <Route
            exact
            path="/"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </Paper>
    </BrowserRouter>
  )
}

export default App
