import { useTheme } from "@emotion/react"
import { AppBar, Toolbar, Typography } from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import IconButton from "@mui/material/IconButton"
import { Box } from "@mui/system"
import React from "react"

const Navbar = ({ setMode }) => {
  const theme = useTheme()
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Gestion Acceuil</Typography>
          <Typography variant="h6">App Created by MELLALA MOHAMMED</Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Typography>
              {theme.palette.mode === "light" ? "Light " : "Dark "}Mode
            </Typography>
            <IconButton
              sx={{ ml: 1 }}
              color="inherit"
              onClick={() =>
                setMode((prev) => (prev === "light" ? "dark" : "light"))
              }
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
