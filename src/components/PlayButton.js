import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { startGame } from '../reducers/thunks'

const StartButton = styled.button`
  width: 200px;
  height: 100px;
  margin-top: 250px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: rgb(206, 68, 206);
  font-size: 30px;
  font-weight: 700;
  font-family: font-family: 'Roboto', sans-serif; 
  color: black;
`

export const PlayButton = () => {

  const dispatch = useDispatch()

  const onPlay = () => {
    dispatch(startGame())
  }

  return (
    <StartButton onClick={() => onPlay()}>Play game</StartButton>
  )
}