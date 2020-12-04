import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { getNextRoom } from '../reducers/thunks'

const RoomContainer = styled.div`
  padding: 20px 0 0 0;
`

const RoomDescription = styled.p`
  margin: 0;
  font-size: 24px;
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0 0 0;
  padding: 0 10px;
  border: 2px dashed rgb(206, 68, 206);
`

const ActionDescription = styled.p`
  margin: 20px 0;
  font-size: 16px;
`

const ActionButton = styled.button`
  background-color: rgb(206, 68, 206);
  font-family: font-family: 'Roboto', sans-serif; 
  margin-bottom: 20px;
  padding: 10px;
  color: black;
  border: none;
  border-radius: 8px;
  width: 200px;
  font-size: 16px;
  font-weight: 700;
`

export const Room = () => {

  const room = useSelector(state => state.game.room)
  const username = useSelector(state => state.game.username)

  const dispatch = useDispatch()

  const onDirection = (action) => {
    dispatch(getNextRoom(action, username))
  }

  return (
    <RoomContainer>
      <RoomDescription>{room.description}</RoomDescription>
      {room.actions.map((action, index) => {
        return (
          <ActionContainer key={index}>
            <ActionDescription>{action.description}</ActionDescription>
            <ActionButton onClick={() => onDirection(action)}>{action.direction}</ActionButton>
          </ActionContainer>
        )
      }
      )}
    </RoomContainer>
  )
}