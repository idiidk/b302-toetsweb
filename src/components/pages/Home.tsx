import React, {useContext} from 'react';
import {Page, route} from 'buro-lib-ts';

import Card from "../layout/Card"
import Toetstaken from "../../assets/images/IllustratieToetstaken.svg"
import ArrowIcon from "../../assets/icons/arrow.svg"
import {NavLink as ReactRouterNavLink} from "react-router-dom";
import ToetsmodelComponent from '../layout/ToetsmodelComponent';
import Colofon from "../layout/footer/Colofon";
import Developers from "../layout/footer/Developers";
import {Language} from "../../utils/Localization";
import {LanguageContext} from "../../utils/contexts/LanguageContext";

const Home = () => {

    const {language, changeLanguage, getTranslation} = useContext(LanguageContext);

    const handleChangeLanguage = () => {
        if (language === Language.NL) changeLanguage(Language.EN);
        if (language === Language.EN) changeLanguage(Language.NL);
    }

    return (
        <>
            <Page className={'home-page'}>
                <div className="home-page__hero-section">
                    <div>
                        <h1 onClick={handleChangeLanguage}>{getTranslation("home.heroTitle")}</h1>
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
                            <h3>Entiteiten, elementen en ontwikkelingsfasen</h3>
                            <p>
                                Binnen iedere toetsentiteit kunnen drie elementen worden onderscheiden. Dit zijn de
                                elementen kwaliteitscriteria, ontwerp en borging. Het eerste element,
                                kwaliteitscriteria,
                                gaat over de vraag welke informatie wordt gebruikt om de kwaliteit van de
                                toetsentiteiten te
                                realiseren en vast te stellen. Het tweede element, ontwerp, is gericht op de vraag hoe
                                de
                                ontwikkeling en inzet van de vijf toetsentiteiten tot stand komt. Het derde element,
                                borging, richt zich op de wijze waarop de kwaliteitsborging van de toetsentiteiten wordt
                                ingericht. Structurele aandacht voor deze drie elementen borgt dat er gewerkt wordt
                                vanuit
                                de PDCA-cyclus.
                                <br/>
                                Opleidingen kunnen zich ontwikkelen op de kwaliteit van toetsing. Er worden vier
                                ontwikkelingsfasen onderscheiden. In het web zijn deze ontwikkelingsfasen gesymboliseerd
                                als
                                vlakjes.
                                <br/>
                                Per toetsentiteit is voor iedere ontwikkelingsfase een korte omschrijving beschikbaar
                                over
                                hoe de toetsentiteit in die fase wordt ingevuld. Om deze omschrijving zichtbaar te
                                maken,
                                beweeg je je muis over deze onderdelen van het toetsweb.
                            </p>
                        </div>

                        <div>
                            <h3>Starten met de scan</h3>
                            <p>
                                Wil je de Toetsweb-Scan uitvoeren, zorg dan dat je met je team tegelijk aan de slag
                                kunt.
                                Het invullen van de scan neemt, als je dat als team doet, minimaal een uur in beslag. Je
                                kunt er ook voor kiezen om de scan eerst individueel in te laten vullen, vervolgens hier
                                in
                                het team over in gesprek te gaan en samen de scan nog eens in te vullen. Als je op
                                ‘start’
                                hebt geklikt, start de scan. Er wordt per toetsentiteit en vervolgens per element
                                (kwaliteitscriteria, ontwerp en borging) gevraagd om een plek in het toetsweb te kiezen.
                                Je
                                vult hier zowel de huidige positie als je ambitie in. Je hebt de mogelijkheid om hier
                                een
                                toelichting op te geven. Aan het eind van de scan wordt het resultaat weergegeven en heb
                                je
                                de mogelijkheid het resultaat te downloaden.
                            </p>

                            <ReactRouterNavLink to={route('scan')}>
                                <span className='home-page__scan-button'>
                                    <p>Start de Toetsweb-Scan</p>
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
