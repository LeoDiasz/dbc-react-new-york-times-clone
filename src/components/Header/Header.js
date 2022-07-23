import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi'
import styles from './styles.module.css'
import { Logo } from '../Logo/Logo';
import { ListTextSmall } from '../ListTextSmall/ListTextSmall';

const Header = () => {
    const listLinks = [{text: "World", url: "/world"}, {text: "U.S."}, {text: "Politics", url: "politics"}, {text: "N.Y."}, {text: "Business"}, {text: "Opinion"}, {text: "Tech", url: "/technology"}, {text: "Science", url: "/science"}, {text: "Health", url: "/health"}, {text: "Sports"}, {text: "Arts"}, {text: "Books"}, {text: "Style"}, {text: "Food"}, {text: "Travel"}, {text: "Magazine"}, {text: "T Magazine"}, {text: "Real State"}, {text: "Video"}, ]

    return (
        <header>
            <div className={styles.headerTop}>
                <div>
                    <GiHamburgerMenu />
                    <BiSearch />
                </div>
                <nav>
                    <ul>   
                        <li>U.S.</li>
                        <li>INTERNATIONAL</li>
                        <li>CANADA</li>
                        <li>ESPANÕL</li>
                        <li>中文</li>
                    </ul>
                </nav>
                <div>
                    <button className="primary-button">SUBSCRIBE FOR $0.25/WEEK</button>
                    <button className="primary-button">LOG IN</button>
                </div>
            </div>
            <div className={styles.headerMid}>
                <div>
                    <small>Thursday, July 21, 2022</small>
                    <small><a href="/">Today's Paper</a></small>
                </div>
                <Logo width="430px"/>
                <div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 34 34"><title>Today's weather: 19°C and Cloudy</title><g fill="none" fillRule="evenodd"><path d="M20.083 3.225c2.672 0 4.972 1.881 5.47 4.471l.402 2.094 2.13-.066.062-.006.048-.002c1.717 0 3.112 1.375 3.112 3.064s-1.396 3.064-3.112 3.064c-4.378 0-10.331-.002-13.615-.004l-.002-.074-2.524.072-.084.006c-1.714 0-3.11-1.375-3.11-3.064a3.083 3.083 0 0 1 3.057-3.066l.1.006.03.002 2.158.094.405-2.119c.496-2.591 2.797-4.472 5.473-4.472m0-2.5c-3.944 0-7.218 2.797-7.928 6.498-.062-.002-.122-.008-.187-.008-3.1 0-5.61 2.49-5.61 5.564s2.511 5.564 5.61 5.564c.052 0 .104-.006.156-.008-.156.008 16.016.008 16.069.008 3.101 0 5.612-2.49 5.612-5.564s-2.512-5.564-5.612-5.564c-.063 0-.123.006-.188.008C27.296 3.522 24.02.725 20.083.725" fill="#ccc"></path><path d="M6.69 32.027c-2.892 0-5.248-2.33-5.248-5.193 0-2.865 2.356-5.195 5.248-5.195h1.032l.408-1.002c.722-3.771 4.067-6.51 7.951-6.51 3.883 0 7.227 2.738 7.948 6.51l.2 1.043 1.084-.027c3.066 0 5.41 2.324 5.41 5.182 0 2.863-2.356 5.193-5.25 5.193H6.69v-.001z" fill="#fff"></path><path d="M16.083 15.377c3.284 0 6.109 2.312 6.722 5.496l.402 2.098 2.134-.072.088-.008.044-.002c2.206 0 4.002 1.77 4.002 3.947 0 2.174-1.796 3.941-4.002 3.941H6.69c-2.206 0-3.998-1.768-3.998-3.941 0-2.178 1.792-3.947 3.96-3.947l.11.008h.03l2.158.096.405-2.119c.611-3.186 3.441-5.497 6.728-5.497m0-2.498c-4.566 0-8.358 3.238-9.178 7.523-.072-.004-.143-.012-.215-.012-3.59 0-6.496 2.885-6.496 6.445 0 3.557 2.906 6.439 6.496 6.439h18.782c3.59 0 6.498-2.883 6.498-6.439 0-3.561-2.908-6.445-6.498-6.445-.072 0-.144.008-.216.012-.822-4.285-4.616-7.523-9.173-7.523" fill="#fff"></path><path d="M16.083 15.377c3.284 0 6.109 2.311 6.722 5.496l.402 2.094 2.13-.068.09-.008.046-.002c2.206 0 4.002 1.771 4.002 3.945 0 2.176-1.796 3.943-4.002 3.943H6.69c-2.206 0-3.998-1.768-3.998-3.943 0-2.174 1.792-3.945 3.958-3.945l.114.006.032.002 2.154.092.405-2.115c.611-3.186 3.441-5.497 6.728-5.497m0-2.498c-4.566 0-8.358 3.238-9.178 7.523-.072-.004-.143-.012-.215-.012-3.59 0-6.496 2.885-6.496 6.443 0 3.559 2.906 6.441 6.496 6.441h18.782c3.59 0 6.498-2.883 6.498-6.441 0-3.559-2.908-6.443-6.498-6.443-.072 0-.144.008-.216.012-.822-4.285-4.616-7.523-9.173-7.523" fill="#fff"></path><path d="M25.473 22.889l-.047.004-.09.006-2.132.068-.399-2.094c-.612-3.184-3.439-5.496-6.723-5.496-3.288 0-6.116 2.312-6.726 5.496l-.406 2.168L6.796 23h-.031l-.114-.059c-2.166 0-3.96 1.855-3.96 4.029s1.794 4.029 3.998 4.029h18.784c2.205 0 4-1.881 4-4.055 0-2.173-1.795-4.055-4-4.055" fill="#ccc"></path></g></svg>
                        <p>19°C</p>
                        <small>27° <span>15°</span></small>
                    </div>
                    <div>
                        <p>Nasqad <span>+1.36%</span></p>  <svg width="5px" height="9px" viewBox="0 0 5 9"><title>Group</title><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Artboard"><g id="Group"><path d="M2.5,9 L2.5,3.373" id="Shape" stroke="#3f893b"></path><polyline id="Shape" fill="#3f893b" fillRule="nonzero" points="4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"></polyline></g></g></g></svg>
                    </div>
                </div>
            </div>
            <div className={styles.headerBot}>
                <nav>
                    <ul>
                        {listLinks.map((link, indice) => (
                            <ListTextSmall key={indice} text={link.text} size="12px" link={link.url ? link.url : ""}/>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export  {Header}