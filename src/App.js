import { useGetCurrentMethodQuery } from "./api/apiMethod";


function App(props) {
    const {data={}, isLoading} = useGetCurrentMethodQuery()

    if(isLoading){
       return (<h2>Lo ading</h2>)
    }

    return ( <div>{console.log(data)}</div> );
}

export default App;