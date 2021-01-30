import React from 'react';

// Stateless functional componant
const Navbar = ({selectedNo}) => {
    return ( 
        <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1">
        Products <span className="badge badge-pill badge-info">{selectedNo}</span>
                </span>
            </nav>
         );
}
 
export default Navbar;