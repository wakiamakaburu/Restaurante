import Cart from '../assets/cart.png';

const Header = (props) => {
    return ( 
        <header className=" container  d-flex align-items-center justify-content-between py-3">
            <img src={props.brand} alt="Brand" />
            <nav>
                <ul className="d-flex align-items-center">
                    <li className="px-1 mx-2">
                        <a href="#" className="text-dark"><b>Home</b></a>
                    </li>
                    <li className="px-1 mx-2">
                        <a href="#" className="text-dark"><b>Menu</b></a>
                    </li>
                    <li className="px-3 mx-2 bg-danger text-white border-1 rounded-pill">
                        <a href="#" className="text-white"><b>Offers</b></a>
                    </li>
                    <li className="px-1 mx-2">
                        <b>About</b>
                    </li>
                    <li className="px-1 mx-2">
                        <a href="#" className="text-dark"><b>Contact Us</b></a>
                    </li>
                    <li className="px-1 mx-2">
                        <img src={Cart} alt="" width="50px" />
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;