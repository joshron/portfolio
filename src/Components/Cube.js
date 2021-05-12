import '../Styles/Cube.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';

function Cube(props) {
  let classVariable;
  if (props.direction === "forward") {
    classVariable = "cube3d forward-animation";
  } else if (props.direction === "reverse") {
    classVariable = "cube3d reverse-animation";
  }
  return (
    <div className="background-container">
      <div className={classVariable}>
        <div className="face cubefront"><FontAwesomeIcon icon={faHtml5} class="cube-icon"/></div>
        <div className="face cubeleft"><FontAwesomeIcon icon={faCss3} class="cube-icon"/></div>
        <div className="face cubeback"><FontAwesomeIcon icon={faJsSquare} class="cube-icon"/></div>
        <div className="face cuberight"><FontAwesomeIcon icon={faReact} class="cube-icon"/></div>
        <div className="face cubetop"><FontAwesomeIcon icon={faVuejs} class="cube-icon"/></div>
        <div className="face cubebottom"><FontAwesomeIcon icon={faFirefoxBrowser} class="cube-icon"/></div>
      </div>
    </div>
  )
}

export default Cube;