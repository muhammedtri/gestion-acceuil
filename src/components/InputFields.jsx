import { Box, Button, TextField } from "@mui/material"
import { Container } from "@mui/system"
import React, { useContext } from "react"
import ContextAssure from "../ContextAssure"

const InputFields = () => {
  const { assure, setAssure, initialState, appMode, setAppMode, updateItem } =
    useContext(ContextAssure)
  const handleChange = (e) => {
    setAssure({
      ...assure,
      [e.target.name]: e.target.value,
    })
  }
  const { addItem } = useContext(ContextAssure)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (appMode === "create") {
      addItem(assure)
      setAssure(initialState)
    }
    if (appMode === "update") {
      updateItem(assure, assure.id)
      setAssure(initialState)
      setAppMode("create")
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
            />
            <TextField
              id="outlined-basic"
              label="Immatricule"
              name="immatricule"
              value={assure.immatricule}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="C.I.N"
              name="cin"
              value={assure.cin}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="N° dossier"
              value={assure.numeroDossier}
              variant="outlined"
              name="numeroDossier"
              onChange={handleChange}
              fullWidth
            />
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
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#1976d2" }}
              fullWidth
              type="submit"
            >
              {appMode === "create" ? "Ajouter" : "Mettre à jour"}
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  )
}

export default InputFields
