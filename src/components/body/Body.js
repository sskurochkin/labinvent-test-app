import './Body.scss';
import Header from "./Header/Header";
import Wrapper from "./Wrapper/Wrapper";
import AddInfo from "./AddInfo/AddInfo";
import InfoCards from "./InfoCards/InfoCards";
import Method from "./Method/Method";

const Body = () => {


	return (<div className="body">


		<Header/>

		<Wrapper>
			<InfoCards/>
			<div className="method-wrapper">
				<Method/>
				<AddInfo/>
			</div>
		</Wrapper>

	</div>
)};

export default Body