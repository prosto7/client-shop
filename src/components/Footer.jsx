import { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Context } from '../index'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { SHOP_ROUTE, LOGIN_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE , CONTACTS_ROUTE} from '../utils/consts'
import { useNavigate } from 'react-router-dom'
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {

   const { user } = useContext(Context);
   const navigate = useNavigate();
   const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
   }
   return (

      <Navbar bg="light" variant="light">
         <Container>
            <Navbar.Brand href={SHOP_ROUTE}>ТехнКасс</Navbar.Brand>
            {user.isAuth ?
               <Nav className="d-flex">
                  <Nav.Link className="p-2" href={SHOP_ROUTE}>Каталог</Nav.Link>
                  <Nav.Link className="p-2" href="#delivery">Доставка</Nav.Link>
                  <Nav.Link className="p-2" href={CONTACTS_ROUTE}>Контакты</Nav.Link>
                  <Nav.Link className="p-2" href={BASKET_ROUTE}>Корзина</Nav.Link>
                  <Button className="ml-auto p-2" variant="light" onClick={() => navigate(ADMIN_ROUTE)}>Админ Панель</Button>
                  <Button className="ml-auto p-2" variant="light"          onClick={() => logOut()}>Выйти</Button>


               </Nav>
               :
               <Nav className="d-flex">
                  <Nav.Link className="p-2" href={SHOP_ROUTE}>Каталог</Nav.Link>
                  <Nav.Link className="p-2" href="#delivery">Доставка</Nav.Link>
                  <Nav.Link className="p-2" href={CONTACTS_ROUTE}>Контакты</Nav.Link>
                  <Button variant="light" className="p-2" href={LOGIN_ROUTE}>Войти</Button>
                  <Button className="ml-auto p-2" variant="light" onClick={() => navigate(REGISTRATION_ROUTE)}>Регистрация</Button>


               </Nav>

            }

         </Container>
      </Navbar>
   )

}
)
export default NavBar;