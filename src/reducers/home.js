import * as ScreenConstants from '../constants/Screen-names';
import { statement } from '@babel/template';

const initialState = {
  homeData: undefined
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ScreenConstants.HOME: {
      return {
        homeData: action.data
      };
    }
    default:
      return state;
  }
};
