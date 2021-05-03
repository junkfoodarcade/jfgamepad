import { createGlobalState } from 'react-hooks-global-state'
const initialState = {
  sessionId: '8a0026f8-3179-47d5-9d54-c1aeb8c9603e',
  replay: [],
}
const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState(initialState)
export { useGlobalState, getGlobalState, setGlobalState }
