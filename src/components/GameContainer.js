import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { PlayButton } from './PlayButton'
import { Loader } from './Loader'
import { Room } from './Room'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0 20px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 200px;
  }

  @media (min-width: 1024px) {
    padding: 0 300px;
  }
`

export const GameContainer = () => {

  const started = useSelector(store => store.game.started)
  const loading = useSelector(store => store.game.loading)
  const actions = useSelector(store => store.game.room.actions)

  return (
    <MainContainer>
      {!started && <PlayButton />}
      {started &&
        <>
          {loading && <Loader />}
          {!loading &&
            <>
              <Room />
              {actions.length === 0 && <PlayButton />}
            </>
          }
        </>
      }
    </MainContainer>
  )
}