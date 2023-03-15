import styled from "@emotion/styled"
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  TableBody,
  TextField,
  Pagination,
} from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Navbar } from "../components"
import { pecofData } from "../pecofData.js"

const StyledTableCell = styled(TableCell)(() => ({
  backgroundColor: "#1976d2",
  color: "white",
}))
const Pecof = () => {
  const [text, setText] = useState("")
  const [page, setPage] = useState(1)
  const numberPages = Math.round(pecofData.length / 10)
  console.log(numberPages)
  const handleSearch = () => {
    return pecofData.filter((data) => data.nom.toLowerCase().startsWith(text))
  }
  return (
    <>
      <Navbar />

      <Container style={{ marginTop: "10px" }}>
        <Box style={{ marginBottom: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Rechercher..."
            variant="outlined"
            fullWidth
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
        <TableContainer component="paper">
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nom Médicemnt</StyledTableCell>
                <StyledTableCell align="right">Code Médicmant</StyledTableCell>
                <StyledTableCell align="right">PPV-PBR</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {handleSearch()
                .slice((page - 1) * 10, 10 * page)
                .map((data) => (
                  <TableRow>
                    <TableCell>{data.nom}</TableCell>
                    <TableCell align="right" style={{ width: "150px" }}>
                      {data.code}
                    </TableCell>
                    <TableCell align="right" style={{ width: "150px" }}>
                      {data.pbr_ppv} DH
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBlock: "10px",
          }}
        >
          <Pagination
            count={numberPages}
            page={page}
            onChange={(e, val) => setPage(val)}
          />
        </Box>
      </Container>
    </>
  )
}

export default Pecof
