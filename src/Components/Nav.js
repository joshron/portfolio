import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Nav() {
  return (
    <nav>
      <a href="https://codepen.io/joshron"><FontAwesomeIcon icon={faCodepen} class="nav-icon"/></a>
      <a href="https://github.com/joshron"><FontAwesomeIcon icon={faGithub} class="nav-icon"/></a>
    </nav>
  )
}

export default Nav;