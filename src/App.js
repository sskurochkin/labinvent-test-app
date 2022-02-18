import './style.scss';
import { useGetCurrentMethodQuery } from "./api/apiMethod";
import Body from './components/body/Body';
import Sidebar from './components/sidebar/Sidebar';
import Svg from './components/Svg/Svg';
import Spinner from "./components/UI/Spinner/Spinner";


const App = props => {
    // const {data={}, isLoading} = useGetCurrentMethodQuery()

    // if(isLoading){
    //    return (<Spinner/>)
    // }

    return ( <main className="main">

        {/*{console.log(data)}*/}
        <Svg/>
        <Sidebar/>
        <Body/>
        </main> );


};

export default App;