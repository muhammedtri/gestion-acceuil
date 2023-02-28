import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { Container } from "@mui/system"
import React, { useContext, useRef, useState } from "react"
import ContextAssure from "../ContextAssure"
import { Dossiers } from "../Data/typeDossiers"

const InputFields = () => {
  const { assure, setAssure, initialState, appMode, setAppMode, updateItem } =
    useContext(ContextAssure)
  const [typeDossier, setTypeDossier] = useState("")
  const handleChange = (e) => {
    setAssure({
      ...assure,
      [e.target.name]: e.target.value,
      typeDossier,
    })
  }
  const { addItem } = useContext(ContextAssure)
  const handleSelectChange = (e) => {
    setTypeDossier(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(assure)
    if (appMode === "create") {
      addItem(assure)
      setAssure(initialState)
      setTypeDossier("")
    }
    if (appMode === "update") {
      updateItem(assure, assure.id)
      setAssure(initialState)
      setAppMode("create")
      setTypeDossier("")
    }
  }
  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              paddingBlock: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Nom de l'assuré"
              name="nom"
              value={assure.nom}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Immatricule"
              name="immatricule"
              value={assure.immatricule}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="outlined-basic"
              label="N° dossier"
              value={assure.numeroDossier}
              variant="outlined"
              name="numeroDossier"
              onChange={handleChange}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl fullWidth>
              <InputLabel shrink id="demo-simple-select-label">
                Type de dossier
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type de Dossier"
                value={typeDossier}
                onChange={handleSelectChange}
              >
                {Dossiers.map((dossier) => (
                  <MenuItem key={dossier.value} value={dossier.value}>
                    {dossier.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              paddingBlock: "30px",
            }}
          >
            <TextField
              id="outlined-basic"
              type="date"
              label="Date d'entree"
              name="dateEntree"
              value={assure.dateEntree}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Date Sortie"
              name="dateSortie"
              value={assure.dateSortie}
              onChange={handleChange}
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Retiré par : "
              name="retirePar"
              value={assure.retirePar}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="C.I.N"
              name="cin"
              value={assure.cin}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ButtonGroup variant="contained">
              <Button
                style={{
                  backgroundColor: "#1976d2",
                  color: "white",
                }}
                fullWidth
                type="submit"
              >
                {appMode === "create" ? "Ajouter" : "Mettre à jour"}
              </Button>
              <Button
                fullWidth
                onClick={() => {
                  setAssure(initialState)
                  setAppMode("create")
                }}
              >
                EFFACER
              </Button>
            </ButtonGroup>
          </Box>
        </form>
      </Container>
    </div>
  )
}

export default InputFields
