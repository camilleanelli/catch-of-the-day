import React from 'react';

// pas besoins de faire une class de composant, parce qu'on a juste à renvoyer quelque chose
// composant fonctionnel sans état
// on passe une fonction fléchée avec les propriétés en arguments
const Header = ({tagline, age}) => (
  <header className="top">
    <h1>Catch
    <span className="ofThe">
      <span className="of">of</span>
      <span className="the">the</span>
    </span>
    day
    </h1>
    <h3 className="tagline">
    {/* en jsx on utilise les {} pour utiliser des variabes et passer les propriétés */}
      <span>{tagline} {age}</span>
    </h3>
  </header>
)
// class Header extends React.Component {
// render() {
//   return (
//
//     );
//   }
// }

export default Header;
