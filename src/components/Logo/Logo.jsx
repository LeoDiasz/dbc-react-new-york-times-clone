import logoImg from "../../images/logo.png"
import {Link} from "react-router-dom"

export const Logo = ({width}) => {
  return (
    <Link to="/">
      <img style={{width: width}}src={logoImg} alt="Logo" />
    </Link>
  )
}
