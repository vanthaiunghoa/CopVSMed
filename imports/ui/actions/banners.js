import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export const GET_LATESTS_GUEST_BANNERS = 'GET_LATESTS_GUEST_BANNERS';

export const GET_LATESTS_AUTH_BANNERS = 'GET_LATESTS_AUTH_BANNERS';


export const getBanners = () => {
  return (dispatch) => {
    Tracker.autorun(() => {//unmount func
      let user = Meteor.user(); //test with const 
      if (user === null) {
        dispatch({
          type: GET_LATESTS_GUEST_BANNERS,
          subscribe: Meteor.subscribe('bannersGuest'),
        });
      } else {
        dispatch({
          type: GET_LATESTS_AUTH_BANNERS,
          subscribe: Meteor.subscribe('bannersAuth', user),
        });
      }
    });
  };
};
