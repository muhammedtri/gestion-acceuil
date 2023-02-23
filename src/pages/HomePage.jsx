import { Paper } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import React, { useState } from "react"
import { Details, InputFields, Navbar } from "../components"

const HomePage = () => {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh" }}>
        <Navbar setMode={setMode} />
        <InputFields />
        <Details />
      </Paper>
    </ThemeProvider>
  )
}

export default HomePage
