// let's go!
// react peut etre utiliser pour le DOM et aussi pour des app mobiles
import React from 'react';
// on a besoins du package react dom
import { render } from 'react-dom';
import Router from './components/Router';
import './css/style.css';


// render prend du jsx ( un genre de html ) pour afficher le composant et l'élément du DOM à utiliser
// ici on va utiliser le Router et non App
render(<Router/>, document.querySelector('#main'));
