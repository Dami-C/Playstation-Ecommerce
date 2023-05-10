import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer/ItemListContainer"

const Header = () => {
  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  )
}

export default Header
