import { IconButton, TableCell, TableRow } from "@mui/material"
import React, { useContext } from "react"
import ContextAssure from "../ContextAssure"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import DeleteIcon from "@mui/icons-material/Delete"

const Item = ({ assure }) => {
  const { deleteItem, setAppMode, onUpdate } = useContext(ContextAssure)
  const handleDelete = () => {
    const deleteConfirm = window.confirm("Veuillez confirmer la suppression ?")
    if (deleteConfirm) {
      deleteItem(assure.id)
    }
  }
  return (
    <TableRow>
      <TableCell>{assure.nom}</TableCell>
      <TableCell align="right">{assure.immatricule}</TableCell>
      <TableCell align="right">{assure.numeroDossier}</TableCell>
      <TableCell align="right">{assure.typeDossier}</TableCell>
      <TableCell align="right">{assure.dateEntree}</TableCell>
      <TableCell align="right">{assure.dateSortie}</TableCell>
      <TableCell align="right">{assure.retirePar}</TableCell>
      <TableCell align="right">{assure.cin}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={() => {
            setAppMode("update")
            onUpdate(assure)
          }}
          color="success"
        >
          <BorderColorIcon />
        </IconButton>
        <IconButton onClick={handleDelete} sx={{ color: "red" }}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default Item
