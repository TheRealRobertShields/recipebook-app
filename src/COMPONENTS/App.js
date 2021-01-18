// LIBRARIES
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './Navbar';
import Home from './Home';
import Auth from './Auth';

// CSS
import '../CSS/Main.css'

// vvv FONT AWESOME ICONS vvv
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBinoculars, faUser, faChevronCircleDown, faUserAlt, faIdCardAlt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add( faHome, faBinoculars, faUser, faChevronCircleDown, faUserAlt, faIdCardAlt, faEye, faEyeSlash )
// ^^^ FONT AWESOME ICONS ^^^


export const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/auth' exact component={Auth}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}