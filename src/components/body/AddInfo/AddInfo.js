import './AddInfo.scss';
import chart from '../../../assets/img/chart.png';
import chart1 from '../../../assets/img/chart_1.png';
import chart2 from '../../../assets/img/chart_2.png';
import chart3 from '../../../assets/img/chart_3.png';

import React from 'react';

function AddInfo(props) {
	return (
		<div className='add-info-wrapper'>
			<div className="chart ">
				<h2 className="chart__title subtitle ">Live chart</h2>
				<div className="chart__chart ">
					<div className="chart__grafic ">
						<ul className="chart__list ">
							<li className="chart__item chart__item--active chart__item--teal ">Plot</li>
							<li className="chart__item chart__item--magenta ">Plot</li>
							<li className="chart__item chart__item--orange ">Plot</li>
						</ul>
						<div className="chart__diagramm ">
							<img src={chart} alt=" "/>
						</div>
					</div>
					<div className="chart__icons ">
						<img src={chart1} alt=" " className="chart__icon "/>
						<img src={chart2} alt=" " className="chart__icon "/>
						<img src={chart3} alt=" " className="chart__icon "/>
					</div>
				</div>

			</div>
			<div className="spectra ">
				<h2 className="spectra__title subtitle ">Spectra</h2>
			</div>
		</div>
	);
}

export default AddInfo;