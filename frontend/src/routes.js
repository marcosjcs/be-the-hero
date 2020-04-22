import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState'

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import EditIncident from './pages/EditIncident';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

export default function Routes(){
    const [theme, setTheme] = usePersistedState('theme', light);
  
    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
    };
    return (
        <BrowserRouter>
            <Switch>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Route path="/" exact component={Logon}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/profile" render={props => <Profile {...props} toggleTheme={toggleTheme} />} toggleTheme={toggleTheme} />
                    <Route path="/incidents/new" component={NewIncident}/>
                    <Route path="/incidents" exact component={EditIncident}/>
                </ThemeProvider>
            </Switch>
        </BrowserRouter>
    )
}