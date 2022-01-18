import { useGetCurrentMethodQuery } from "./api/apiMethod";


function App(props) {
    const {data={}, isLoading} = useGetCurrentMethodQuery()
    console.log(data)

    if(isLoading){
        return (<h2>Loading</h2>)
    }

    return ( <div>{}</div> );
}

export default App;