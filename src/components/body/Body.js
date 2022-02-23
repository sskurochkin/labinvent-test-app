import './Body.scss';
import Header from "./header/Header";
import Wrapper from "./wrapper/Wrapper";
import AddInfo from "./addInfo/AddInfo";
import InfoCards from "./infoCards/InfoCards";
import Method from "./Method/Method";
import React from "react";

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
	)
};

export default Body