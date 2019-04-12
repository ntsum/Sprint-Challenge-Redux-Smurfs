import { FETCH_SMURFS, SUCCESS, ERROR, ADD_SMURF,} from '../actions'

const initialState = {
    smurfs: [],
    fetchSmurfs: false,
    addSmurf: false,
    updatingSmurf: false,
    error: null
}

function reducer (state = initialState, action) {
  console.log('reducer', action)
  switch(action.type) {
    case FETCH_SMURFS:
    return {
      ...state,
      fetchSmurfs: true,
      error: null
    }
    case SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      error: null
    }
    case ERROR:
    return {
      ...state,
      error: action.payload
    }
    case ADD_SMURF:
    return {
      ...state,
      addSmurf: true,
      error: null
    }
  default:
    return state
  }
}

export default reducer