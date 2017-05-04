import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {        
    switch (action.type) {
      case FETCH_WEATHER:
        //never manipulate the state don't use (push, = )
        return [ action.payload.data, ...state ];
    }

    return state;
}