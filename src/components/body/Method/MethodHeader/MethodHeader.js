import './MethodHeader.scss'
import moment from "moment";
import React from 'react';

function MethodHeader(props) {

	const {currentTime, totalTime, runTime} = {...props}

	const fullTime = moment(totalTime).format('mm:ss')
	const timeFromStart = moment(currentTime).format('mm:ss')
	const workTime = moment(runTime).format('hh:mm:ss')

	return (
		<div className="method__header">
			<div className="method__worklist worklist">
				<h3 className="worklist__title">Worklist <span
					className={props.status === 'RUN' ? 'status' : 'status stop'}>{props.status}</span></h3>
				<p className="worklist__todo">To do: <span>{`${props.countInjections} injections`}</span></p>
				<p className="worklist__time">{workTime}</p>
			</div>
			<p className="method__name method__header--active-item">Method: <span>{`${props.name} (${timeFromStart}/${fullTime})`}</span>
			</p>
			<p className="method__single">Single run</p>
		</div>);
}

export default MethodHeader;

// var timeFormat = (function (){
// 	function num(val){
// 		val = Math.floor(val);
// 		return val < 10 ? '0' + val : val;
// 	}
//
// 	return function (ms/**number*/){
// 		var sec = ms / 1000
// 			, hours = sec / 3600  % 24
// 			, minutes = sec / 60 % 60
// 			, seconds = sec % 60
// 		;
//
// 		return num(hours) + ":" + num(minutes) + ":" + num(seconds);
// 	};
// })();
//
//
// // demo
// var start = new Date;
// setInterval(function (){
// 	time.innerHTML = timeFormat(new Date - start);
// }, 1000);