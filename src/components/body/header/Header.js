import './Header.scss';
import adminLogo from '../../../assets/img/admin.png';
import lock from '../../../assets/img/lock.png';

const Header = () => {
	return (<div className="body__header">
		<div className="menu">
			<span></span>
		</div>
		<nav className="body__header__nav nav">
			<ul className="nav__list">
				<li>
					<a href="!#" className="show-more">Instruments</a>
					<ul className="nav__list__sublist">
						<li>
							<a href="!#">Instrument 1</a>
						</li>
						<li>
							<a href="!#">Instrument 2</a>
						</li>
					</ul>
				</li>
				<li><a href="!#">Widgets</a></li>
				<li><a href="!#">View</a></li>
				<li><a href="!#">Administration</a></li>
			</ul>

		</nav>
		<div className="body__header__admin admin">
			<div className="admin__name"><img src={adminLogo} alt=""/> Alexander</div>
			<ul className="admin__lang">
				<li className="show-more">ENG</li>
			</ul>
			<div className="admin__lock"><img src={lock} alt=""/></div>
		</div>
	</div>)
}

export default Header