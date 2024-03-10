import '../global.css';
import './header.css';

import chatImage from '../assets/Wchat.png';
import degpImage from '../assets/Wdegp.png';
import profImage from '../assets/Wprof.png';

import PchatImage from '../assets/Pchat.png';
import PdegpImage from '../assets/Pdegp.png';
import PprofImage from '../assets/Pprof.png';

import { Link } from 'react-router-dom';

const Header = () => {
  const handleMouseEnter = (event) => {
    switch (event.target.alt) {
      case 'chatWhite':
        event.target.src = PchatImage;
        break;
      case 'degPWhite':
        event.target.src = PdegpImage;
        break;
      case 'profileWhite':
        event.target.src = PprofImage;
        break;
      default:
        break;
    }

  };

  const handleMouseLeave = (event) => {
    switch (event.target.alt) {
      case 'chatWhite':
        event.target.src = chatImage;
        break;
      case 'degPWhite':
        event.target.src = degpImage;
        break;
      case 'profileWhite':
        event.target.src = profImage;
        break;
      default:
        break;
    }
  };

  return (
    <div className="header-container">
      <nav className="navbar">
        <Link to="../chatpage" className="larger-text alternateFont">
          advisabot.
        </Link>
        <div>
          <ul id="navbar">
            <li className="chat-link">
              <Link
                to="../chatpage"
                className="generalFont chat-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={chatImage} alt="chatWhite" className="chatWhite" /> chat
              </Link>
            </li>

            <li className="chat-link">
              <Link
                to="../degreeplan"
                className="generalFont degreeplan-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={degpImage} alt="degPWhite" className="degPWhite" /> degree plan
              </Link>
            </li>

            <li>
              <Link
                to="../profile-page"
                className="header-link generalFont"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={profImage} alt="profileWhite" className="profileWhite" /> 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
