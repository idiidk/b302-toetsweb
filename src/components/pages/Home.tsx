import React, {useContext} from 'react';
import {Page, route} from 'buro-lib-ts';

import Card from "../layout/Card"
import Toetstaken from "../../assets/images/IllustratieToetstaken.svg"
import ArrowIcon from "../../assets/icons/arrow.svg"
import {NavLink as ReactRouterNavLink} from "react-router-dom";
import ToetsmodelComponentOud from '../layout/ToetsmodelComponentOud';
import Colofon from "../layout/footer/Colofon";
import Developers from "../layout/footer/Developers";
import {Language} from "../../utils/Localization";
import {LanguageContext} from "../../utils/contexts/LanguageContext";
import ToetsmodelComponent from "../layout/toetsmodel/ToetsmodelComponent";

const Home = () => {

    const {getTranslation} = useContext(LanguageContext);

    return (
        <>
            <Page className={'home-page'}>
                <div className="home-page__hero-section">
                    <div>
                        <h1>{getTranslation("home.heroTitle")}</h1>
                        <br/>
                        <p className={'home-page__hero-section__subtitle'}>{getTranslation("home.heroSubtitle")}</p>
                    </div>
                    <div className={"home-page__hero-section__toetsmodel"}>
                        <ToetsmodelComponent/>
                    </div>
                </div>

                <div className='home-page__blur'></div>

                <div className='home-page__info-section'>
                    <Card className={'home-page__info-section__card'}>
                        <h3>{getTranslation("home.assessmentQualityTitle")}</h3>
                        <p>{getTranslation("home.assessmentQualityText")}</p>
                    </Card>

                    <Card className={'home-page__info-section__card'}>
                        <h3>{getTranslation("home.assessmentExplainedTitle")}</h3>
                        <p>{getTranslation("home.assessmentExplainedText")}</p>
                    </Card>
                </div>

                <div className='home-page__extra-info'>
                    <div className='home-page__extra-info__text'>
                        <div>
                            <h3>{getTranslation("home.entities.title")}</h3>
                            <p>
                                {getTranslation("home.entities.text.part1")}
                            </p>
                            <p>
                                {getTranslation("home.entities.text.part2")}
                            </p>
                            <p>
                                {getTranslation("home.entities.text.part3")}
                            </p>
                        </div>

                        <div>
                            <h3>{getTranslation("home.startScan.title")}</h3>
                            <p>
                                {getTranslation("home.startScan.text")}
                            </p>
                            <ReactRouterNavLink to={route('scan')}>
                                <span className='home-page__scan-button'>
                                    <p>{getTranslation("home.startScanButton")}</p>
                                    <img src={ArrowIcon} alt="pijl naar rechts"/>
                                </span>
                            </ReactRouterNavLink>
                        </div>
                    </div>
                    <div className='home-page__extra-info__image'>
                        <img src={Toetstaken} alt="Illustratie Toets(tak)en"/>
                    </div>
                </div>
                <Developers/>
            </Page>
            <Colofon/>
        </>
    );
};

export default Home;
