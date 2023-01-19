import { Menu, MenuItem, Icon, Button } from "semantic-ui-react";

function Header ({currentUser, handleLogOut}) {
    

    return (
        <div className="header">
            <Menu>
                <MenuItem position="left"> B R I X </MenuItem>
                <MenuItem position="right">
                    <Button icon>
                        <Icon name="user" />
                    </Button>
                    { currentUser && <button className='ui button' onClick={handleLogOut}>Log Out</button> }
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Header;