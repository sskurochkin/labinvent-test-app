import './Scheme.scss';
import inlet from '../../../../assets/img/inlet.png'
import agilent from '../../../../assets/img/agilent.png'
import detector from '../../../../assets/img/detector.png'

import React from 'react';

function Scheme(props) {
	return (
		<div className="method__scheme">
			<div className="scheme">
				<div className="scheme__item">
					<h4 className="scheme__title">Front Inlet</h4>
					<div className="scheme__img"><img src={inlet} alt=""/>
					</div>
					<p className="scheme__desc">SS (H<sub>2</sub>)</p>
				</div>
				<div className="scheme__item">
					<h4 className="scheme__title">Agilent 19091Q-002</h4>
					<div className="scheme__img"><img src={agilent} alt=""/>
					</div>
					<p className="scheme__desc scheme__desc--think">60 &deg;C-450 &deg;C
						(450 &deg;C) <span>25 m
                                                        *
                                                        320 um * 1 um</span></p>
				</div>
				<div className="scheme__item">
					<h4 className="scheme__title">Back Detector</h4>
					<div className="scheme__img">
						<img src={detector} alt=" "/>
					</div>
					<p className="scheme__desc ">NPD</p>
				</div>
			</div>
			<div className="scheme__data data ">
				<div className="data__block ">
					<p className="data__text ">(Initial): 0 min</p>
					<p className="data__text ">ArMe @ 35 &deg;C Oven</p>
					<p className="data__text ">Out: Ambient Pressure</p>
					<p className="data__text ">25 m * 320 um * 1 um</p>
				</div>
			</div>
		</div>
	);
}

export default Scheme;