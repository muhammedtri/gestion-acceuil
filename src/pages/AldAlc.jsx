import { Box, Container } from "@mui/system"
import React, { useState } from "react"
import { Navbar } from "../components"
import { ald } from "../aldalc"
import { Autocomplete, TextField } from "@mui/material"

function AldAlc() {
  const defaultProps = {
    options: ald,
    getOptionLabel: (option) => option.code_ald,
  }
  const [value, setValue] = useState([])
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "40px" }}>
        <form style={{ display: "flex", alignItems: "center" }}>
          <Autocomplete
            {...defaultProps}
            id="combo-box-demo"
            sx={{ width: "100%", height: "60px" }}
            renderInput={(params) => (
              <TextField {...params} label="Code ALD/ALC" />
            )}
            onChange={(e, value) => {
              setValue(value)
            }}
          />
        </form>
        <Box>
          {value && (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                marginTop: "40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <p>Code ALD/ALC : </p>
                <h4>{value.code_ald}</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <p>Déclinaisons : </p>
                <h4>{value.declinaisons}</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <p>Période de couverture : </p>
                <h4>{value.periode_de_couverture}</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <p>Pièces à fournir : </p>
                <h4>{value.pieces_fournir}</h4>
              </div>
            </Box>
          )}
        </Box>
      </Container>
    </>
  )
}

export default AldAlc
