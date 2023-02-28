import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore"
import React, { createContext, useEffect, useState } from "react"
import { db } from "./firebase"

const ContextAssure = createContext()

export const AssureProvider = ({ children }) => {
  const initialState = {
    nom: "",
    immatricule: "",
    cin: "",
    numeroDossier: "",
    dateEntree: "",
    dateSortie: "",
    retirePar: "",
    typeDossier: "",
  }
  const [assure, setAssure] = useState(initialState)
  const [typeDossier, setTypeDossier] = useState("")
  const [appMode, setAppMode] = useState("create")
  const [dataAssure, setDataAssure] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const fetchData = async () => {
    const q = query(collection(db, "assures"), orderBy("dateSortie", "desc"))
    await onSnapshot(q, (querySnapshot) => {
      let data = []
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
      })
      setDataAssure(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
  const handleSearch = () => {
    return dataAssure.filter(
      (ass) =>
        ass.nom.toLowerCase().startsWith(searchTerm) ||
        ass.numeroDossier.startsWith(searchTerm)
    )
  }
  // Add Item to Firestore
  const addItem = async (item) => {
    await addDoc(collection(db, "assures"), {
      ...item,
    })
  }

  // delete Item from Firestore
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "assures", id))
  }

  // Update Item Firestore
  const updateItem = async (item, id) => {
    await updateDoc(doc(db, "assures", id), {
      ...item,
    })
  }
  const onUpdate = (ass) => {
    setAssure(ass)
  }
  return (
    <ContextAssure.Provider
      value={{
        assure,
        initialState,
        setAssure,
        dataAssure,
        addItem,
        handleSearch,
        setSearchTerm,
        deleteItem,
        appMode,
        setAppMode,
        onUpdate,
        updateItem,
        typeDossier,
        setTypeDossier,
      }}
    >
      {children}
    </ContextAssure.Provider>
  )
}

export default ContextAssure
