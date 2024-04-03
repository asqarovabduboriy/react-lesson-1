import './Navbar.css';
import miLogo from '../../assets/imgs/i.webp';


function Navbar() {
  return (
    <div>

      <header>
        <div className="container">
          <div className="wrapper_big">
            <nav className="Nav_one">
              <img className="logo__mi" src={miLogo} alt="" />
              <ul>
                <li>Phone</li>
                <li>smart home</li>
                <li>life style</li>
              </ul>
            </nav>
            <nav className="nav_two ">
              <ul>
                <li>Discover</li>
                <li>Suport</li>
                <svg xmlns="http://www.w3.org/2000/svg" width="28 " height="28" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>



  );
}

export default Navbar;