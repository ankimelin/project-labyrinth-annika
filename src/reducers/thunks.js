import { game } from './game'

export const startGame = () => {
  return (dispatch) => {
    dispatch(game.actions.setLoading(true))
    const username = Math.random()
    dispatch(game.actions.setUsername(username))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'content-type': 'application/JSON' },
      body: JSON.stringify({
        username: username
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        dispatch(game.actions.setStartGame(data))
        dispatch(game.actions.setLoading(false))
      })
  }
}

export const getNextRoom = (action, username) => {
  return (dispatch) => {
    dispatch(game.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'content-type': 'application/JSON' },
      body: JSON.stringify({
        username: username,
        type: action.type,
        direction: action.direction
      })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(game.actions.setNextRoom(data))
        dispatch(game.actions.setLoading(false))
      })
  }
}
