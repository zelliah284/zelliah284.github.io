import Profile from "../Components/Profile";
import Links from "../Components/Links";
import Icons from "../Components/Icons";
import Footer from "../Components/Footer";
// import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <Profile />
          <Links />
           <Icons />
          <Footer />
        </div>
    )
}
export default Home;