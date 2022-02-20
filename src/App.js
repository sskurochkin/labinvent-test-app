import './style.scss';
import Body from './components/body/Body';
import Sidebar from './components/sidebar/Sidebar';
import Svg from './components/Svg/Svg';


const App = props => {


    return ( <main className="main">

        <Svg/>
        <Sidebar/>
        <Body/>
        </main> );


};

export default App;