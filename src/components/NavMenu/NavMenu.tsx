import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Segment, Icon } from 'semantic-ui-react';

function NavMenu() {
    // useLocation permet de récupérer l'URL
    // https://reactrouter.com/pt/main/hooks/use-location
    const location = useLocation();

    return (
        <Segment raised>
            <Menu>
                <NavLink to="/">
                    {/* si NavLink isActiv -> ajoute active sur le Menu Item */}
                    {({ isActive }) => (
                        <Menu.Item
                            active={isActive || location.pathname === '/Home'}
                            name="home"
                        >
                            <Icon color="grey" name="home" size="large" />
                            Accueil
                        </Menu.Item>
                    )}
                </NavLink>

                <NavLink to="/FAQ">
                    {({ isActive }) => (
                        <Menu.Item
                            active={isActive || location.pathname === '/FAQ'}
                            name="FAQ"
                        >
                            <Icon color="grey" name="question" size="large" />
                            FAQ
                        </Menu.Item>
                    )}
                </NavLink>
            </Menu>
        </Segment>
    );
}

export default NavMenu;
