import navbar from './assets/navbar.json'

function NavBar() {
    return ( 
    <>
    <div>
    <nav  className="nav flex-column navbar navbar-expand-lg navbar-light bg-dark">

        <ul className="nav nav-tabs">
        <li className="nav-item">
        { navbar.map(item => {return (
          <a className="nav-link" key={item.id} href="#">{item.lista}</a>
         )}
        )}            
        </li>
        </ul>
    </nav>
    </div>
    </> 
    );
}

export default NavBar;