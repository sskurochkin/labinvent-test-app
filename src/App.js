import './style.scss';


import { useGetCurrentMethodQuery } from "./api/apiMethod";
import Body from './components/body/Body';
import Sidebar from './components/sidebar/Sidebar';
import Svg from './components/Svg/Svg';


function App(props) {
    const {data={}, isLoading} = useGetCurrentMethodQuery()

    if(isLoading){
       return (<h2>Lo ading</h2>)
    }

    return ( <main className="main">
        
        {console.log(data)}
        <Svg/>
        <Sidebar/>
        <Body/>
        </main> );
}

export default App;