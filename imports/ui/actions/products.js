import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export const GET_LATESTS_GUEST_PRODUCTS = 'GET_LATESTS_GUEST_PRODUCTS';

export const GET_LATESTS_AUTH_PRODUCTS = 'GET_LATESTS_AUTH_PRODUCTS';


export const getProducts = () => {
  return (dispatch) => {
    Tracker.autorun(() => {//unmount func
      let user = Meteor.user(); //test with const 
      if (user === null) {
        dispatch({
          type: GET_LATESTS_GUEST_PRODUCTS,
          subscribe: Meteor.subscribe('productsGuest'),
        });
      } else {
        dispatch({
          type: GET_LATESTS_AUTH_PRODUCTS,
          subscribe: Meteor.subscribe('productsAuth', user),
        });
      }
    });
  };
};
