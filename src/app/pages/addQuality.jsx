import React from 'react'
import QualityForm from '../components/ui/qialityForm'

const AddQualityPage = () => {
  const handeleSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <h1>Add Quality</h1>
      <QualityForm onSubmit={handeleSubmit} />
    </>
  )
}

export default AddQualityPage
