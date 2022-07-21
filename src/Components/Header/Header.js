import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header>
        <div className={styles.headerTop}>
            <div>
                <a href=""><GiHamburgerMenu /></a>
                <a href=""><BiSearch /></a>
            </div>
            <nav>
                <ul>   
                    <li>U.S.</li>
                    <li>International</li>
                    <li>Canada</li>
                    <li>Espanõl</li>
                    <li>中文</li>
                </ul>
            </nav>
            <div>
                <button>SUBSCRIBE FOR 0.25/WEEK</button>
                <button>LOG IN</button>
            </div>
        </div>
    </header>
  )
}
export default Header