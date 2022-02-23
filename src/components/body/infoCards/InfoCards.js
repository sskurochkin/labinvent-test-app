import './InfoCards.scss';
import therm from '../../../assets/img/therm.png'
import vial from '../../../assets/img/vial.png'
import React from 'react';

function InfoCards(props) {
	return (
		<div className="info-cards">
			<div className="arrow">&#5176;</div>
			<div className="info-card">
				<h3 className="info-card__title">Sampler</h3>
				<div className="info-card__body">
					<div className="injection-wrapper">
						<svg className="injection">
							<use xlinkHref='#injection'/>
						</svg>
						<div className="injection__body">
							<img src={therm} alt="" className="injection__item"/>
							<img src={vial} alt="" className="injection__item"/>
						</div>
					</div>

				</div>
			</div>
			<div className="info-card">


				<h3 className="info-card__title info-card__title--orange">Quad. Pump</h3>
				<div className="info-card__body">
					<div className="bottle-wrapper">
						<div className="bottle">
							<svg className="icon">
								<use xlinkHref='#bottle-full'/>
							</svg>
							<span className="bottle__title">A</span>
							<p className="bottle__desc">0.0</p>
						</div>
						<div className="bottle">
							<svg className="icon">
								<use xlinkHref='#bottle-full'/>
							</svg>
							<span className="bottle__title">B</span>
							<p className="bottle__desc">100.0</p>
						</div>
						<svg className="valve">
							<use xlinkHref='#valve'/>
						</svg>
					</div>
					<p className="info-card__desc">
						1.000 ml/min
					</p>

				</div>
			</div>
		</div>

	);
}

export default InfoCards;