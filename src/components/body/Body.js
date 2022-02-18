import './Body.scss';
import Header from "./Header/Header";
import Wrapper from "./Wrapper/Wrapper";
import AddInfo from "./AddInfo/AddInfo";
import InfoCards from "./InfoCards/InfoCards";
import Method from "./Method/Method";
import {useGetCurrentMethodQuery} from "../../api/apiMethod";
import Spinner from "../UI/Spinner/Spinner";


const Body = () => {

const {data={}, isLoading} = useGetCurrentMethodQuery()
	console.log(data)




	return (<div className="body">


		<Header/>

		<Wrapper>
			<InfoCards/>
			<div className="method-wrapper">
				{isLoading ?<Spinner/>:<Method data={data}/>}
				<AddInfo/>
			</div>
		</Wrapper>

	</div>
)};

export default Body