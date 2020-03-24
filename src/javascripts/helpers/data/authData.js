import firebase from 'firebase/app';
import pasture from '../../components/pasture/pasture';

import 'firebase/auth';
import farmHouse from '../../components/farmhouse/farmhouse';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const farmhouseDiv = $('#farmhouse');
const singleFarmer = $('#single-farmer');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      farmhouseDiv.removeClass('hide');
      singleFarmer.removeClass('hide');

      pasture.buildCows();
      farmHouse.buildFarmers();
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      logoutButton.addClass('hide');
      farmhouseDiv.addClass('hide');
      singleFarmer.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
