import '../../assets/scss/vars.scss';
import './Sidebar.scss';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__header'>
				<a href='!#' className='sidebar__header__logo'>
					Lims
				</a>
			</div>
			<div className='sidebar__body'>
				<form className='sidebar__body__form'>
					<input
						type='text'
						className='sidebar__body__input'
						placeholder='Search'
					/>
				</form>
			</div>
			<div className='sidebar__footer'>
				<div className='sidebar__footer__timeline footer__timeline'>
					<div className='footer__timeline__time'>Run<span className='start'>00:13</span>/
						<span className='alltime'>1:00</span>
					</div>
					<div className='footer__timeline__remaining'>-00:47</div>
				</div>
				<div className='sidebar__footer__buttons buttons'>
					<p className='buttons__text'>Run</p>
					<div className='buttons__wrapper'>
						<div className='buttons__item buttons__item-active'>
							<span>ON</span>
						</div>
						<div className='buttons__item'>
							<span>OFF</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
