import {
  Container,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useContext } from "react"
import ContextAssure from "../ContextAssure"
import { Item } from "../components"

const StyledTableCell = styled(TableCell)(() => ({
  backgroundColor: "#1976d2",
  color: "white",
}))

const Details = () => {
  const { handleSearch, setSearchTerm } = useContext(ContextAssure)
  return (
    <div>
      <Container>
        <Box
          style={{
            marginBlock: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Rechercher ..."
            variant="outlined"
            fullWidth
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nom Assuré</StyledTableCell>
                <StyledTableCell align="right">Immatricule</StyledTableCell>
                <StyledTableCell align="right">N° Dossier</StyledTableCell>
                <StyledTableCell align="right">Type de Dossier</StyledTableCell>
                <StyledTableCell align="right">Date Entree</StyledTableCell>
                <StyledTableCell align="right">Date Sortie</StyledTableCell>
                <StyledTableCell align="right">Retiré Par</StyledTableCell>
                <StyledTableCell align="right">C.I.N</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {handleSearch().map((assure) => (
                <Item key={assure.id} assure={assure} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default Details
