import React from 'react'
import styled from 'styled-components'

const LoaderText = styled.p`
  margin: 0;
  padding-top: 20px;
  font-size: 30px;
 `

export const Loader = () => {
  return (
    <LoaderText>Loading...</LoaderText>
  )
}