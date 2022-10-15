import airbnbLogo from '../../public/images/airbnb-logo.png'

function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} alt="AirBnB Logo" className='nav--logo' />
    </nav>
  );
}

export default Navbar;
