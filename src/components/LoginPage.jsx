import { Avatar, Button, Paper, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import LockIcon from "@mui/icons-material/Lock"
import React, { useContext, useRef, useState } from "react"
import { pink } from "@mui/material/colors"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const errorRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user
        setIsLoggedIn(true)
        navigate("/home")

        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        setError(errorCode.split("/")[1])
        errorRef.current.style.display = "block"
        // const errorMessage = error.message
        // console.log(error, errorCode)
        // ..
      })
  }
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      style={{ height: "100vh", display: "grid", placeItems: "center" }}
    >
      <Paper
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "20px",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: pink[500], width: 56, height: 56 }}>
            <LockIcon />
          </Avatar>
          <Typography variant="h6" fontWeight="bold" mt={1}>
            Gestion des Assurés
          </Typography>
        </Box>
        <TextField
          label="Entrer votre email :"
          fullWidth
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextField
          label="Entrer votre mot de passe :"
          fullWidth
          type="password"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Typography
          ref={errorRef}
          variant="h6"
          color="red"
          fontWeight="bold"
          textAlign="center"
          style={{ display: "none" }}
        >
          {error}
        </Typography>
        <Button color="primary" variant="contained" type="submit">
          Connexion
        </Button>
      </Paper>
    </Box>
  )
}

export default LoginPage
