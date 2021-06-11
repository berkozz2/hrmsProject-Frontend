import React, { useState } from "react";
import { Container, Menu, Icon} from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    
    function handleSignOut() {
        setIsAuthenticated(false)
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

  return (
    <div> 
        <Menu size="large" inverted fixed="top">
          <Container>
            <Menu.Item name="HRMS PROJECT">
              <Icon name="globe"/>
              HRMS PROJECT
            </Menu.Item>
            <Menu.Item name="Ana Sayfa">
              <Icon name="home" />
              Ana Sayfa
            </Menu.Item>
            <Menu.Item name="İş ilanları"/>
            <Menu.Item name="Cv-ler" />

            <Menu.Menu position="right">
                {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn} />}
            </Menu.Menu>
          </Container>
        </Menu>
    </div>
  );
}
