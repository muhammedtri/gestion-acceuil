import styled from "@emotion/styled"
import { AppBar, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const NavLink = styled(Link)({
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  marginInline: "10px",
  "&:hover": {
    color: "black",
  },
})
const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Gestion Accueil</Typography>
          <Box style={{ display: "flex" }}>
            <NavLink to="/Home">
              <Typography variant="title">Accueil</Typography>
            </NavLink>
            <NavLink to="/pecof">
              <Typography variant="title">Médicament Tiers Payants</Typography>
            </NavLink>
            <NavLink to="/ald">
              <Typography variant="title">ALD/ALC</Typography>
            </NavLink>
          </Box>
          <Box>
            <img
              src={logo}
              alt="logo"
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
