import React from 'react'
import { useHistory } from 'react-router-dom'
import QualityForm from '../components/ui/qialityForm'
import { useQualities } from '../hooks/useQualities'

const AddQualityPage = () => {
  const history = useHistory()
  const { addQuality } = useQualities()

  const handeleSubmit = (data) => {
    addQuality(data).then((data) => {
      if (data) history.push('/')
    })
  }
  return (
    <>
      <h1>Add Quality</h1>
      <QualityForm onSubmit={handeleSubmit} />
    </>
  )
}

export default AddQualityPage
