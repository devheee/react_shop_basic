import { Link } from "react-router-dom"
import { NAV } from "../data/default";
import { Inner } from "./common"
import GlobalNav from "./GlobalNav";

const Header = ({ DEFAULT, NAV }) => {
    return (
        <header className="Header">
            <Inner className="inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/grafflogo.png'} alt={DEFAULT.company} />
                    </Link>
                </h1>
                <nav className="GlobalGnb">
                    <GlobalNav NAV={NAV} />
                </nav>
            </Inner>
        </header>
    )
}

export default Header;