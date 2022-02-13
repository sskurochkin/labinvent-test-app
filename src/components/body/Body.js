import './Body.scss';

function Body() {
    return ( <div className="body">
                <div className="body__header">
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
                        <div className="admin__name"><img src="./assets/img/admin.png" alt=""/> Alexander</div>
                        <ul className="admin__lang">
                            <li className="show-more">ENG</li>
                        </ul>
                        <div className="admin__lock"><img src="./assets/img/lock.png" alt=""/></div>
                    </div>
                </div>


                <div className="body-wrapper">
                    <div className="info-cards">
                        <div className="arrow">&#5176;</div>
                        <div className="info-card">
                            <h3 className="info-card__title">Sampler</h3>
                            <div className="info-card__body">
                                <div className="injection-wrapper">
                                    <svg className="injection">
                                        <use xlinkHref='#injection' />
                                    </svg>
                                    <div className="injection__body">
                                        <img src="./assets/img/therm.png" alt="" className="injection__item"/>
                                        <img src="./assets/img/vial.png" alt="" className="injection__item"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="info-card">
                            
                            <h3 className="info-card__title info-card__title--orange">Quad. Pump</h3>
                            <div className="info-card__body">
                                <div className="bottle-wrapper">
                                    <div className="bottle">
                                        <svg className="icon" >
                                            <use  xlinkHref='#bottle-full' />
                                        </svg>
                                        <span className="bottle__title">A</span>
                                        <p className="bottle__desc">0.0</p>
                                    </div>
                                    <div className="bottle">
                                        <svg className="icon">
                                            <use xlinkHref='#bottle-full' />
                                        </svg>
                                        <span className="bottle__title">B</span>
                                        <p className="bottle__desc">100.0</p>
                                    </div>
                                    <svg className="valve">
                                        <use xlinkHref='#valve' />
                                    </svg>
                                </div>
                                <p className="info-card__desc">
                                    1.000 ml/min
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="method-wrapper">
                        <div className="method">
                            <div className="method__header">
                                <div className="method__worklist worklist">
                                    <h3 className="worklist__title">Worklist <span>Run</span></h3>
                                    <p className="worklist__todo">To do: <span>23 injections</span></p>
                                    <p className="worklist__time">02:15:00</p>
                                </div>
                                <p className="method__name method__header--active-item">Method: <span>Method1.amx
                                        (00:00/04:30)</span> </p>
                                <p className="method__single">Single run</p>
                            </div>
                            <div className="method__body">
                                <ul className="method__leftbar">
                                    <li className="method__leftbar-item">ALS</li>
                                    <li className="method__leftbar-item ">Inlets</li>
                                    <li className="method__leftbar-item method__leftbar-item--active">Columns</li>
                                    <li className="method__leftbar-item"></li>
                                </ul>
                                <div className="method__main">
                                    <div className="method__scheme">
                                        <div className="scheme">
                                            <div className="scheme__item">
                                                <h4 className="scheme__title">Front Inlet</h4>
                                                <div className="scheme__img"> <img src="./assets/img/inlet.png" alt=""/>
                                                </div>
                                                <p className="scheme__desc">SS (H<sub>2</sub>)</p>
                                            </div>
                                            <div className="scheme__item">
                                                <h4 className="scheme__title">Agilent 19091Q-002</h4>
                                                <div className="scheme__img"> <img src="./assets/img/agilent.png" alt=""/>
                                                </div>
                                                <p className="scheme__desc scheme__desc--think">60 &deg;C-450 &deg;C (450 &deg;C) <span>25 m
                                                        *
                                                        320 um * 1 um</span></p>
                                            </div>
                                            <div className="scheme__item">
                                                <h4 className="scheme__title">Back Detector</h4>
                                                <div className="scheme__img">
                                                    <img src="./assets/img/detector.png" alt=" "/>
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
                                    <div className="method__control ">
                                        <h3 className="line__title "> <span className="text ">Control mode </span><span
                                                className="hr "></span></h3>
                                        <div className="method__form form ">
                                            <div className="form__item form__item--full ">

                                                <input type="checkbox" name="control" id="control" className="form__box"/>
                                                <label htmlFor="control " className="form__label ">On</label>
                                            </div>

                                            <div className="form__item ">
                                                <label htmlFor="formName " className="form__label ">Flow</label>
                                                <input type="text " id="formName " name="name " className="form__input "/>
                                                <span>mL/min</span>
                                            </div>
                                            <div className="form__item ">
                                                <label htmlFor="formName " className="form__label ">Average Velocity</label>
                                                <input type="text " id="formName " name="name " className="form__input "/>
                                                <span>cm/sec</span>
                                            </div>
                                            <div className="form__item ">
                                                <label htmlFor="formName " className="form__label ">Pressure</label>
                                                <input type="text " id="formName " name="name " className="form__input "/>
                                                <span>psi</span>
                                            </div>
                                            <div className="form__item ">
                                                <label htmlFor="formName " className="form__label ">Holdup time</label>
                                                <input type="text " id="formName " name="name " className="form__input "/>
                                                <span>min</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="method__post ">
                                        <h3 className="line__title "> <span className="text ">Post Run</span><span
                                                className="hr "></span></h3>
                                        <div className="method__form form ">

                                            <div className="form__item ">
                                                <label htmlFor="formName " className="form__label ">Post Run</label>
                                                <input type="text " id="formName " name="name " className="form__input "/>
                                                <span>mL/min</span>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="method__table ">
                                    <div className="method__table-btn"></div>
                                    <h3 className="line__title "> <span className="text ">Pressure/Flow Settings</span><span
                                            className="hr "></span></h3>
                                    <div className="table__radio">
                                        <div className="radio__item">
                                            <input type="radio" name="radio" id="constant_pres"/>
                                            <label htmlFor="constant_pres">Constant Pressure</label>
                                        </div>
                                        <div className="radio__item">
                                            <input type="radio" name="radio" id="ramped_pres"/>
                                            <label htmlFor="ramped_pres">Ramped Pressure</label>
                                        </div>
                                        <div className="radio__item">
                                            <input type="radio" name="radio" id="constant_flow"/>
                                            <label htmlFor="constant_flow">Constant Flow</label>
                                        </div>
                                        <div className="radio__item">
                                            <input type="radio" name="radio" id="ramped_flow"/>
                                            <label htmlFor="ramped_flow">Ramped Flow</label>
                                        </div>
                                    </div>
                                    <table className="table">
                                        <tbody>
                                            <tr className="table-header">
                                                <th></th>
                                                <th>Ramp ##</th>
                                                <th>Rate, mL/min per min</th>
                                                <th>Value, mL/min</th>
                                                <th>Hold Time, min</th>
                                                <th>Run Time, min</th>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>(Initial)</td>
                                                <td></td>
                                                <td>16.849</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td><input type="radio" name="table" id=""/></td>
                                                <td>Ramp 1</td>
                                                <td>10</td>
                                                <td>16.849</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td><input type="radio" name="table" id=""/></td>
                                                <td>Ramp 1</td>
                                                <td>20</td>
                                                <td>16.849</td>
                                                <td>5</td>
                                                <td>26</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="method__footer ">
                                <div className="buttons-left ">
                                    <div className="buttons-left__btn "><span>+</span>New</div>
                                    <div className="buttons-left__btn "><span>&#9675; &#9675; &#9675;</span>Open</div>
                                </div>
                                <div className="buttons-right ">
                                    <div className="buttons-right__btn ">Save</div>
                                    <div className="buttons-right__btn ">Save as</div>
                                    <div className="buttons-right__btn buttons-right__btn--outline ">Cancel</div>
                                </div>
                            </div>
                        </div>

                        <div className="add-info-wrapper ">
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
                                            <img src="./assets/img/chart.png " alt=" "/>
                                        </div>
                                    </div>
                                    <div className="chart__icons ">
                                        <img src="./assets/img/chart_1.png " alt=" " className="chart__icon "/>
                                        <img src="./assets/img/chart_2.png " alt=" " className="chart__icon "/>
                                        <img src="./assets/img/chart_3.png " alt=" " className="chart__icon "/>
                                    </div>
                                </div>

                            </div>
                            <div className="spectra ">
                                <h2 className="spectra__title subtitle ">Spectra</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default Body