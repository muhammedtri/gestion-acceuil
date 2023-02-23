import { Navbar, InputFields, Details } from "./components"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useState } from "react"
import { Paper } from "@mui/material"

function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "100vh" }}>
        <Navbar setMode={setMode} />
        <InputFields />
        <Details />
      </Paper>
    </ThemeProvider>
  )
}

export default App
