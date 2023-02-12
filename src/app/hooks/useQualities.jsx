import React, { useContext, useEffect, useState } from 'react'
import qualityService from '../services/quality.service'

const QualitiesContex = React.createContext()

export const useQualities = () => {
  return useContext(QualitiesContex)
}

export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    const getQualities = async () => {
      try {
        const { content } = await qualityService.fetchAll()
        setQualities(content)
        setLoading(false)
      } catch (error) {
        const { message } = error.response.data
        setError(message)
      }
    }
    getQualities()
  }, [])
  return (
    <QualitiesContex.Provider value={{ qualities, isLoading }}>
      {!isLoading ? children : <h1>Qualities Loading...</h1>}
    </QualitiesContex.Provider>
  )
}
