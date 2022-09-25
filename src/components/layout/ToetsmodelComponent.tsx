import { useState } from 'react';
import XMARK from "../../assets/icons/xmark.svg"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function ToetsmodelComponent() {

    const [oneHover, setOneHover] = useState(false);

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const handleOneHoverOver = () => {
        setOneHover(true);
    };

    const handleOneHoverOut = () => {
        setOneHover(false);
    };


    return (
        <div className='toetsmodel-component'>

            <div>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className='toetsmodel-component__center'>
                        <img src={XMARK} onClick={() => setOpen(false)} alt="Close button" />
                        <div>
                            <h4>Visie op onderwijs</h4>
                            <p>
                                De manier waarop de toetsing wordt ingericht is een middel om de visie op onderwijs te realiseren, in plaats van een doel op zich (Baartman, Van Schilt-Mol & Van der Vleuten, 2020). De visie op toetsing, die onderdeel uitmaakt van de visie op onderwijs, vormt het fundament voor het borgen van de kwaliteit van de toetsing en zal er voor zorgen dat toetsing onderdeel wordt van het onderwijsconcept. Daarmee werkt deze visie versterkend op het realiseren van de onderwijsdoelen (VO-Raad, 2019). Dit veronderstelt uiteraard dat het hebben van een visie op onderwijs voorwaardelijk is om op een zinvolle wijze invulling te kunnen geven aan toetsing.
                                De kern van het toetsweb, visie op onderwijs, geeft antwoord op de vraag wat de opleiding verstaat onder goed onderwijs. De visie wordt gevormd wordt door ten minste;
                            </p>
                            <br />
                            <ul>
                                <li><p>de legitimering van het onderwijs/de opleiding,</p></li>
                                <li><p>een visie op het doel van het onderwijs/het beroep waartoe wordt opgeleid,</p></li>
                                <li><p>een visie op de opdracht* van het onderwijs,</p></li>
                                <li><p>een visie op leren en een visie op toetsen (Van Schilt-Mol, 2021).</p></li>
                            </ul>
                            <br />
                            <p>
                            * Voor de opdracht van het onderwijs geldt dat, passend bij de uitgangspunten van eigentijds toetsen en beoordelen, de vormende (socialisatie en persoonsvorming) en de kwalificerende functie in onderling evenwicht de aandacht moeten krijgen (Hoogland, 2017).
                            </p>
                        </div>
                    </div>
                </Popup>
            </div>

            <svg version="1.1" id="toetsmodel" 
                height="672" width="672">
                <style type="text/css">
                    {`
                    .st0{fill:#FFFFFF;}
                    .st1{fill:#45AD48;}
                    .st2{opacity:0.75;fill:#45AD48;}
                    .st3{opacity:0.65;fill:#45AD48;}
                    .st4{opacity:0.5;fill:#45AD48;}
                    .st5{fill:#ED7A0B;}
                    .st6{opacity:0.75;fill:#ED7A0B;}
                    .st7{opacity:0.65;fill:#ED7A0B;}
                    .st8{opacity:0.5;fill:#ED7A0B;}
                    .st9{fill:#B072AD;}
                    .st10{opacity:0.75;fill:#B072AD;}
                    .st11{opacity:0.65;fill:#B072AD;}
                    .st12{opacity:0.65;fill:#FFFFFF;}
                    .st13{opacity:0.5;fill:#B072AD;}
                    .st14{opacity:0.5;fill:#FFFFFF;}
                    .st15{fill:#2DB3A5;}
                    .st16{opacity:0.75;fill:#2DB3A5;}
                    .st17{opacity:0.65;fill:#2DB3A5;}
                    .st18{opacity:0.5;fill:#2DB3A5;}
                    .st19{fill:#44A6C2;}
                    .st20{opacity:0.75;fill:#45A7C3;}
                    .st21{opacity:0.65;fill:#45A7C3;}
                    .st22{opacity:0.5;fill:#45A7C3;}
                    .st23{fill:#010202;}
                    .test{fill:#fc2205;}
                    `}
                </style>
                <circle className="st0" cx="298" cy="297.5" r="242.4"/>
                <path className="st1" d="M120.7,297.6c0-18.8,2.9-37,8.4-54l-29.6-9.8c-6.5,20.1-10,41.5-10,63.8c0,69.4,33.9,130.8,86,168.8l18.2-25.3
                    C149.5,408.7,120.7,356.5,120.7,297.6z"/>
                <path className="st2" d="M151.9,297.6c0-15.4,2.4-30.2,6.8-44.2l-29.6-9.8c-5.4,17-8.4,35.2-8.4,54c0,58.9,28.7,111.1,72.9,143.4
                    l18.2-25.3C175.5,389.1,151.9,346.1,151.9,297.6z"/>
                <path className="st0" d="M193.8,441.7l-0.4-0.3c-22.2-16.2-40.6-37.6-53.2-61.9c-13.1-25.1-20-53.4-20-81.9c0-18.5,2.8-36.7,8.4-54.1
                    l0.2-0.5l30.6,10.1l-0.1,0.5c-4.5,14.2-6.8,29-6.8,44c0,23.3,5.6,46.5,16.3,67c10.3,19.9,25.3,37.4,43.5,50.7l0.4,0.3L193.8,441.7z
                    M129.4,244.2c-5.4,17.2-8.2,35.2-8.2,53.4c0,28.3,6.9,56.5,19.8,81.5c12.5,24,30.6,45.2,52.5,61.2l17.6-24.5
                    c-18.1-13.3-33-30.8-43.3-50.7c-10.7-20.7-16.4-44-16.4-67.5c0-14.9,2.2-29.7,6.7-43.9L129.4,244.2z"/>
                <path className="st3" d="M183.1,297.6c0-12,1.8-23.5,5.2-34.4l-29.6-9.8c-4.4,13.9-6.8,28.8-6.8,44.2c0,48.5,23.6,91.5,59.9,118.1
                    l18.2-25.3C201.6,369.4,183.1,335.6,183.1,297.6z"/>
                <path className="st0" d="M212,416.4l-0.4-0.3c-18.2-13.4-33.4-31-43.7-51c-10.7-20.7-16.4-44-16.4-67.5c0-15.1,2.3-30,6.8-44.3l0.2-0.5
                    l30.6,10.1l-0.1,0.5c-3.4,11-5.2,22.5-5.2,34.2c0,36.3,17.5,70.8,46.7,92.3l0.4,0.3L212,416.4z M159,254.1
                    c-4.4,14.1-6.6,28.7-6.6,43.5c0,23.3,5.6,46.5,16.3,67c10.2,19.7,25.1,37.1,43,50.4l17.6-24.5c-29.3-21.7-46.7-56.4-46.7-92.8
                    c0-11.6,1.7-23,5.1-34L159,254.1z"/>
                <path className="st4" d="M188.3,263.2c-3.4,10.9-5.2,22.4-5.2,34.4c0,38.1,18.5,71.8,46.9,92.7l65.7-91.5L188.3,263.2z"/>
                <path className="st0" d="M230.1,391l-0.4-0.3c-29.5-21.7-47.1-56.5-47.1-93.1c0-11.8,1.8-23.4,5.2-34.5l0.2-0.5l108.5,36L230.1,391z
                    M188.6,263.9c-3.3,10.9-5,22.2-5,33.7c0,36.1,17.3,70.5,46.3,92l65-90.5L188.6,263.9z"/>
                <path className="st5" d="M298.2,475c-38.6,0-74.4-12.3-103.5-33.3l-18.5,25.1c34.3,24.8,76.4,39.4,122,39.4c45.7,0,87.9-14.7,122.2-39.6
                    l-18.5-25.1C372.8,462.6,336.9,475,298.2,475z"/>
                <path className="st6" d="M298.2,443.9c-31.7,0-61.1-10.1-85-27.2l-18.5,25.1c29.1,21,64.9,33.3,103.5,33.3c38.7,0,74.6-12.4,103.8-33.5
                    l-18.5-25.1C359.4,433.7,330,443.9,298.2,443.9z"/>
                <path className="st0" d="M298.2,475.5c-37.5,0-73.4-11.5-103.8-33.4l-0.4-0.3l19.1-25.9l0.4,0.3c24.8,17.8,54.1,27.1,84.7,27.1
                    c30.7,0,60.1-9.5,85-27.3l0.4-0.3l19.1,25.9l-0.4,0.3C371.8,463.9,335.8,475.5,298.2,475.5z M195.4,441.6
                    c30.1,21.5,65.6,32.9,102.8,32.9c37.3,0,72.9-11.4,103.1-33.1l-17.9-24.3c-25,17.8-54.4,27.2-85.2,27.2c-30.7,0-60-9.3-84.9-27
                    L195.4,441.6z"/>
                <path className="st7" d="M298.2,412.7c-24.8,0-47.7-7.8-66.5-21.2l-18.5,25.1c24,17.1,53.3,27.2,85,27.2c31.8,0,61.3-10.2,85.3-27.4
                    L365,391.3C346.1,404.8,323.1,412.7,298.2,412.7z"/>
                <path className="st0" d="M298.2,444.4c-30.8,0-60.3-9.4-85.3-27.3l-0.4-0.3l19.1-25.9l0.4,0.3c19.4,13.8,42.3,21.1,66.2,21.1
                    c24,0,47-7.4,66.5-21.3l0.4-0.3l19.1,25.9l-0.4,0.3C358.7,434.8,329.1,444.4,298.2,444.4z M213.9,416.5
                    c24.7,17.6,53.9,26.8,84.3,26.8c30.6,0,59.8-9.3,84.6-27L364.9,392c-19.6,13.9-42.6,21.2-66.7,21.2c-23.9,0-46.9-7.3-66.4-21
                    L213.9,416.5z"/>
                <path className="st8" d="M231.6,391.5c18.8,13.3,41.7,21.2,66.5,21.2c24.9,0,48-7.9,66.8-21.4l-66.6-90.5L231.6,391.5z"/>
                <path className="st0" d="M298.2,413.2c-24.1,0-47.2-7.4-66.8-21.3l-0.4-0.3l0.3-0.4l67.1-91.3l67.3,91.5l-0.4,0.3
                    C345.6,405.7,322.4,413.2,298.2,413.2z M232.4,391.4c19.3,13.6,42.1,20.8,65.8,20.8c23.9,0,46.7-7.3,66.1-21l-65.9-89.6L232.4,391.4
                    z"/>
                <path className="st9" d="M506.8,297.6c0-22.2-3.5-43.6-9.9-63.7l-29.6,9.8c5.4,17,8.3,35.1,8.3,53.9c0,58.8-28.6,110.9-72.7,143.2
                    l18.2,25.3C473.1,428.2,506.8,366.8,506.8,297.6z"/>
                <path className="st10" d="M444.4,297.6c0,48.4-23.5,91.3-59.7,117.9l18.2,25.3c44.1-32.3,72.7-84.4,72.7-143.2c0-18.8-2.9-36.9-8.3-53.9
                    l-29.6,9.8C442.1,267.4,444.4,282.2,444.4,297.6z"/>
                <path className="st0" d="M402.8,441.5l-18.8-26.2l0.4-0.3c18-13.3,33-30.8,43.3-50.6c10.8-20.8,16.2-43.3,16.2-66.9
                    c0-15-2.3-29.7-6.7-43.9l-0.1-0.5l30.6-10.1l0.2,0.5c5.5,17.4,8.4,35.6,8.4,54c0,28.4-6.9,56.7-19.9,81.8
                    c-12.6,24.3-30.9,45.6-53,61.8L402.8,441.5z M385.5,415.6l17.6,24.5c21.8-16.1,39.9-37.2,52.3-61.2c12.9-24.9,19.8-53.1,19.8-81.3
                    c0-18.1-2.7-36-8.2-53.2l-28.7,9.5c4.4,14.1,6.6,28.8,6.6,43.7c0,23.7-5.5,46.4-16.3,67.3C418.4,384.7,403.4,402.3,385.5,415.6z"/>
                <path className="st11" d="M413.2,297.6c0,37.9-18.4,71.6-46.7,92.5l18.2,25.3c36.2-26.6,59.7-69.5,59.7-117.9c0-15.4-2.4-30.1-6.8-44
                    l-29.6,9.8C411.4,274.2,413.2,285.7,413.2,297.6z"/>
                <path className="st12" d="M384.7,416.2L365.9,390l0.4-0.3c29.1-21.5,46.5-56,46.5-92.1c0-11.6-1.7-23.1-5.2-34.1l-0.1-0.5l30.6-10.1
                    l0.2,0.5c4.5,14.3,6.8,29.1,6.8,44.2c0,23.7-5.5,46.4-16.3,67.3c-10.3,20-25.4,37.6-43.6,51L384.7,416.2z M367.3,390.2l17.6,24.5
                    c17.9-13.2,32.7-30.6,42.9-50.3c10.8-20.8,16.2-43.3,16.2-66.9c0-14.8-2.2-29.4-6.6-43.4l-28.7,9.5c3.4,10.9,5.1,22.4,5.1,33.9
                    C413.8,333.9,396.4,368.5,367.3,390.2z"/>
                <path className="st13" d="M366.6,390.1c28.3-21,46.7-54.6,46.7-92.5c0-11.9-1.8-23.4-5.2-34.2l-107,35.5L366.6,390.1z"/>
                <path className="st14" d="M366.5,390.8l-66.2-92.3l108.1-35.8l0.2,0.5c3.5,11.1,5.2,22.7,5.2,34.4c0,36.5-17.5,71.2-46.9,92.9
                    L366.5,390.8z M301.9,299.1l64.8,90.3c28.8-21.6,46.1-55.9,46.1-91.8c0-11.5-1.7-22.8-5-33.6L301.9,299.1z"/>
                <path className="st15" d="M466.9,242.5l29.7-9.5C469.5,149.6,391.2,89.2,298.8,88.9l0.2,31.2C377.4,120.5,443.8,171.7,466.9,242.5z"/>
                <path className="st16" d="M437.2,252l29.7-9.5c-23.1-70.8-89.5-122-167.9-122.4l0.2,31.2C363.6,151.8,418.1,193.8,437.2,252z"/>
                <path className="st0" d="M436.9,252.6l-0.2-0.5c-19.5-59.6-74.8-99.9-137.5-100.3l-0.5,0l-0.2-32.2l0.5,0
                    c76.9,0.4,144.6,49.7,168.4,122.7l0.2,0.5L436.9,252.6z M299.7,150.8c62.8,0.6,118.1,41,137.8,100.5l28.8-9.2
                    c-23.8-72.2-90.7-121-166.8-121.6L299.7,150.8z"/>
                <path className="st17" d="M299.2,151.3l0.2,31.2c50.4,0.5,93.1,33.4,108.1,78.9l29.7-9.5C418.1,193.8,363.6,151.8,299.2,151.3z"/>
                <path className="st0" d="M407.1,262.1l-0.2-0.5c-15.4-46.5-58.6-78.1-107.6-78.6l-0.5,0l-0.2-32.2l0.5,0c63.2,0.4,118.8,41,138.5,101
                    l0.2,0.5L407.1,262.1z M299.9,182c49.1,0.7,92.3,32.3,107.9,78.8l28.8-9.2c-19.6-59.2-74.5-99.2-136.9-99.8L299.9,182z"/>
                <path className="st18" d="M407.5,261.5c-15-45.5-57.7-78.4-108.1-78.9l0.7,113.1L407.5,261.5z"/>
                <path className="st0" d="M299.5,296.3L298.9,182l0.5,0c49.4,0.5,93.1,32.4,108.6,79.3l0.2,0.5l-0.5,0.2L299.5,296.3z M299.9,183
                    l0.7,111.9l106.3-33.8C391.4,215.1,348.5,183.7,299.9,183z"/>
                <path className="st19" d="M297.8,120.1l0.2-31.2c-92.6,0.1-171,60.5-198.2,144l29.7,9.5C152.6,171.6,219.2,120.3,297.8,120.1z"/>
                <path className="st20" d="M297.6,151.3l0.2-31.2c-78.6,0.2-145.1,51.4-168.3,122.3l29.7,9.5C178.3,193.7,233,151.6,297.6,151.3z"/>
                <path className="st0" d="M159.5,252.5l-30.7-9.8l0.2-0.5c11.5-35.3,33.5-65.7,63.5-87.9c30.6-22.6,67-34.6,105.2-34.7l0.5,0l-0.2,32.2
                    l-0.5,0c-62.9,0.3-118.3,40.5-137.9,100.2L159.5,252.5z M130.1,242.1l28.8,9.2c19.8-59.7,75.3-100,138.2-100.4l0.2-30.2
                    c-37.8,0.2-73.8,12.1-104.1,34.5C163.4,177.1,141.6,207.2,130.1,242.1z"/>
                <path className="st21" d="M297.4,182.5l0.2-31.2c-64.6,0.3-119.2,42.3-138.4,100.5l29.7,9.5C204,215.8,246.8,182.9,297.4,182.5z"/>
                <path className="st0" d="M189.2,262l-30.7-9.8l0.2-0.5c19.8-60.1,75.6-100.6,138.8-100.9l0.5,0l-0.2,32.2l-0.5,0
                    c-49.1,0.3-92.5,31.9-108,78.5L189.2,262z M159.8,251.6l28.8,9.2c15.7-46.6,59.1-78.2,108.3-78.7l0.2-30.2
                    C234.6,152.3,179.5,192.3,159.8,251.6z"/>
                <path className="st22" d="M297.4,182.5c-50.5,0.3-93.3,33.3-108.5,78.8l107.8,34.3L297.4,182.5z"/>
                <path className="st0" d="M297.2,296.3l-108.9-34.7l0.2-0.5c15.6-47,59.4-78.8,108.9-79.2l0.5,0L297.2,296.3z M189.6,261l106.7,34
                    l0.7-111.9C248.1,183.6,205.1,214.8,189.6,261z"/>
                <Popup
                    open={open}
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={-30}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g>
                            <ellipse className="st0" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -123.0953 298.0021)" cx="298.2" cy="297.6" rx="83.9" ry="83.9"/>
                            <g>
                                <path className="st23" d="M262,292.3l-4.2-14h3.3l1.7,6.5c0.2,0.8,0.4,1.5,0.6,2.2c0.2,0.7,0.4,1.5,0.6,2.2h0.1
                                    c0.2-0.8,0.4-1.5,0.6-2.2c0.2-0.7,0.4-1.5,0.6-2.2l1.7-6.5h3.2l-4.2,14H262z"/>
                                <path className="st23" d="M273.9,280.1c-0.5,0-1-0.2-1.3-0.5c-0.3-0.3-0.5-0.7-0.5-1.2c0-0.5,0.2-0.9,0.5-1.2c0.3-0.3,0.8-0.5,1.3-0.5
                                    c0.5,0,1,0.2,1.3,0.5c0.3,0.3,0.5,0.7,0.5,1.2c0,0.5-0.2,0.9-0.5,1.2C274.8,280,274.4,280.1,273.9,280.1z M272.3,292.3v-10.6h3.2
                                    v10.6H272.3z"/>
                                <path className="st23" d="M282.4,292.6c-0.7,0-1.4-0.1-2.2-0.4c-0.7-0.3-1.4-0.6-1.9-1.1l1.4-2c0.5,0.4,1,0.7,1.4,0.8s0.9,0.3,1.4,0.3
                                    c0.5,0,0.8-0.1,1-0.2c0.2-0.2,0.3-0.4,0.3-0.7c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.7-0.3
                                    c-0.3-0.1-0.5-0.2-0.8-0.3c-0.3-0.1-0.7-0.3-1-0.5c-0.3-0.2-0.6-0.4-0.9-0.6c-0.3-0.2-0.5-0.5-0.7-0.9c-0.2-0.3-0.3-0.7-0.3-1.2
                                    c0-0.5,0.1-0.9,0.3-1.4c0.2-0.4,0.5-0.8,0.8-1.1c0.4-0.3,0.8-0.5,1.3  -0.7c0.5-0.2,1.1-0.2,1.7-0.2c0.8,0,1.5,0.1,2.1,0.4
                                    c0.6,0.3,1.2,0.6,1.6,0.9l-1.4,1.9c-0.4-0.3-0.8-0.5-1.1-0.7c-0.4-0.2-0.7-0.2-1.1-0.2c-0.8,0-1.2,0.3-1.2,0.8
                                    c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.7,0.3s0.5,0.2,0.8,0.3c0.3,0.1,0.7,0.3,1,0.4s0.6,0.4,0.9,0.6
                                    c0.3,0.2,0.5,0.5,0.7,0.9c0.2,0.4,0.3,0.8,0.3,1.3c0,0.5-0.1,0.9-0.3,1.4c-0.2,0.4-0.5,0.8-0.8,1.1c-0.4,0.3-0.8,0.6-1.4,0.7
                                    C283.8,292.5,283.1,292.6,282.4,292.6z"/>
                                <path className="st23" d="M291.4,280.1c-0.5,0-1-0.2-1.3-0.5c-0.3-0.3-0.5-0.7-0.5-1.2c0-0.5,0.2-0.9,0.5-1.2c0.3-0.3,0.8-0.5,1.3-0.5
                                    c0.5,0,1,0.2,1.3,0.5c0.3,0.3,0.5,0.7,0.5,1.2c0,0.5-0.2,0.9-0.5,1.2C292.4,280,292,280.1,291.4,280.1z M289.9,292.3v-10.6h3.2
                                    v10.6H289.9z"/>
                                <path className="st23" d="M301.6,292.6c-0.8,0-1.5-0.1-2.1-0.4c-0.7-0.2-1.2-0.6-1.7-1.1c-0.5-0.5-0.9-1.1-1.1-1.7
                                    c-0.3-0.7-0.4-1.5-0.4-2.4c0-0.9,0.1-1.6,0.4-2.3c0.3-0.7,0.7-1.3,1.1-1.8c0.5-0.5,1-0.8,1.6-1.1c0.6-0.3,1.2-0.4,1.9-0.4
                                    c0.8,0,1.4,0.1,2,0.4c0.6,0.3,1,0.6,1.4,1.1c0.4,0.5,0.7,1,0.8,1.6c0.2,0.6,0.3,1.3,0.3,2c0,0.3,0,0.6,0,0.8c0,0.3-0.1,0.5-0.1,0.6
                                    h-6.4c0.1,0.8,0.5,1.3,1,1.7c0.5,0.4,1.1,0.5,1.8,0.5c0.8,0,1.5-0.2,2.3-0.7l1.1,1.9c-0.5,0.4-1.1,0.7-1.8,0.9
                                    C302.9,292.5,302.3,292.6,301.6,292.6z M299.3,285.8h3.8c0-0.6-0.1-1.1-0.4-1.5c-0.3-0.4-0.7-0.6-1.4-0.6c-0.5,0-0.9,0.2-1.3,0.5
                                    C299.6,284.6,299.4,285.2,299.3,285.8z"/>
                                <path className="st23" d="M319,292.6c-0.7,0-1.3-0.1-2-0.4c-0.6-0.2-1.2-0.6-1.7-1.1s-0.9-1.1-1.1-1.7c-0.3-0.7-0.4-1.5-0.4-2.4
                                    c0-0.9,0.1-1.7,0.4-2.4c0.3-0.7,0.7-1.3,1.1-1.7s1-0.8,1.7-1.1c0.6-0.2,1.3-0.4,2-0.4c0.7,0,1.3,0.1,1.9,0.4
                                    c0.6,0.3,1.2,0.6,1.7,1.1s0.9,1.1,1.1,1.7c0.3,0.7,0.4,1.5,0.4,2.4c0,0.9-0.1,1.7-0.4,2.4c-0.3,0.7-0.7,1.3-1.1,1.7s-1,0.8-1.7,1.1
                                    C320.3,292.5,319.7,292.6,319,292.6z M319,290c0.6,0,1.1-0.3,1.5-0.8c0.3-0.5,0.5-1.3,0.5-2.2c0-0.9-0.2-1.7-0.5-2.2
                                    c-0.3-0.5-0.8-0.8-1.5-0.8c-0.7,0-1.1,0.3-1.5,0.8c-0.3,0.5-0.5,1.3-0.5,2.2c0,0.9,0.2,1.7,0.5,2.2C317.9,289.8,318.3,290,319,290z
                                    "/>
                                <path className="st23" d="M327.4,296.3v-14.6h2.6l0.2,1.1h0.1c0.4-0.4,0.9-0.7,1.4-0.9c0.5-0.2,1.1-0.4,1.6-0.4c0.6,0,1.2,0.1,1.7,0.4
                                    c0.5,0.3,1,0.6,1.3,1.1c0.4,0.5,0.6,1,0.8,1.7s0.3,1.4,0.3,2.2c0,0.9-0.1,1.7-0.4,2.4c-0.3,0.7-0.6,1.3-1,1.8
                                    c-0.4,0.5-0.9,0.9-1.4,1.1c-0.5,0.3-1.1,0.4-1.7,0.4c-0.5,0-0.9-0.1-1.3-0.3c-0.4-0.2-0.8-0.5-1.2-0.8l0.1,1.7v3.1H327.4z
                                    M332.3,290c0.5,0,1-0.2,1.4-0.7c0.4-0.5,0.6-1.3,0.6-2.4c0-1.9-0.6-2.9-1.8-2.9c-0.6,0-1.2,0.3-1.8,1v4.4c0.3,0.3,0.6,0.4,0.9,0.5
                                    C331.7,290,332,290,332.3,290z"/>
                                <path className="st23" d="M252.6,318.3c-0.9,0-1.8-0.2-2.6-0.5c-0.8-0.3-1.4-0.8-2-1.4c-0.6-0.6-1-1.4-1.3-2.3
                                    c-0.3-0.9-0.5-1.9-0.5-3.1c0-1.1,0.2-2.2,0.5-3.1c0.3-0.9,0.7-1.6,1.3-2.3c0.6-0.6,1.2-1.1,2-1.4c0.8-0.3,1.6-0.5,2.6-0.5
                                    s1.8,0.2,2.6,0.5c0.8,0.3,1.4,0.8,2,1.4c0.6,0.6,1,1.4,1.3,2.3s0.5,1.9,0.5,3c0,1.1-0.2,2.2-0.5,3.1c-0.3,0.9-0.7,1.7-1.3,2.3
                                    c-0.6,0.6-1.2,1.1-2,1.4C254.4,318.2,253.6,318.3,252.6,318.3z M252.6,315.6c1,0,1.7-0.4,2.3-1.2c0.6-0.8,0.8-1.9,0.8-3.4
                                    c0-1.4-0.3-2.5-0.8-3.3c-0.6-0.8-1.3-1.2-2.3-1.2c-1,0-1.7,0.4-2.3,1.2c-0.6,0.8-0.8,1.9-0.8,3.3c0,1.4,0.3,2.5,0.8,3.4
                                    C250.9,315.2,251.7,315.6,252.6,315.6z"/>
                                <path className="st23" d="M262.4,318.1v-10.6h2.6l0.2,1.4h0.1c0.5-0.4,1-0.8,1.5-1.1c0.5-0.3,1.2-0.5,1.9-0.5c1.2,0,2,0.4,2.5,1.1
                                    c0.5,0.8,0.8,1.8,0.8,3.2v6.6h-3.2v-6.2c0-0.8-0.1-1.3-0.3-1.6c-0.2-0.3-0.5-0.4-1-0.4c-0.4,0-0.7,0.1-1,0.3s-0.6,0.4-0.9,0.8v7.2
                                    H262.4z"/>
                                <path className="st23" d="M279.6,318.3c-0.7,0-1.3-0.1-1.8-0.4c-0.5-0.3-1-0.6-1.4-1.1c-0.4-0.5-0.7-1.1-0.9-1.7
                                    c-0.2-0.7-0.3-1.5-0.3-2.3c0-0.9,0.1-1.7,0.4-2.3c0.3-0.7,0.6-1.3,1-1.8c0.4-0.5,0.9-0.8,1.4-1.1c0.5-0.3,1.1-0.4,1.6-0.4
                                    c0.6,0,1.1,0.1,1.5,0.3c0.4,0.2,0.8,0.5,1.1,0.8l-0.1-1.6V303h3.2v15h-2.6l-0.2-1.1h-0.1c-0.4,0.4-0.8,0.7-1.3,0.9
                                    C280.6,318.2,280.1,318.3,279.6,318.3z M280.4,315.8c0.3,0,0.7-0.1,0.9-0.2c0.3-0.1,0.5-0.4,0.8-0.8v-4.4c-0.3-0.3-0.6-0.4-0.9-0.5
                                    c-0.3-0.1-0.6-0.2-0.9-0.2c-0.5,0-0.9,0.2-1.3,0.7c-0.4,0.5-0.6,1.2-0.6,2.2c0,1.1,0.2,1.8,0.5,2.3
                                    C279.3,315.5,279.8,315.8,280.4,315.8z"/>
                                <path className="st23" d="M293.9,318.3c-0.8,0-1.5-0.1-2.1-0.4c-0.7-0.2-1.2-0.6-1.7-1.1c-0.5-0.5-0.9-1.1-1.1-1.7
                                    c-0.3-0.7-0.4-1.5-0.4-2.4c0-0.9,0.1-1.6,0.4-2.3c0.3-0.7,0.7-1.3,1.1-1.8s1-0.8,1.6-1.1s1.2-0.4,1.9-0.4c0.8,0,1.4,0.1,2,0.4
                                    s1,0.6,1.4,1.1c0.4,0.5,0.7,1,0.8,1.6c0.2,0.6,0.3,1.3,0.3,2c0,0.3,0,0.6,0,0.8s-0.1,0.5-0.1,0.6h-6.4c0.1,0.8,0.5,1.3,1,1.7
                                    c0.5,0.4,1.1,0.5,1.8,0.5c0.8,0,1.5-0.2,2.3-0.7l1.1,1.9c-0.5,0.4-1.1,0.7-1.8,0.9C295.2,318.2,294.6,318.3,293.9,318.3z
                                    M291.5,311.6h3.8c0-0.6-0.1-1.1-0.4-1.5c-0.3-0.4-0.7-0.6-1.4-0.6c-0.5,0-0.9,0.2-1.3,0.5C291.9,310.4,291.7,310.9,291.5,311.6z"
                                    />
                                <path className="st23" d="M301.3,318.1v-10.6h2.6l0.2,1.9h0.1c0.4-0.7,0.9-1.3,1.4-1.6c0.5-0.3,1.1-0.5,1.6-0.5c0.3,0,0.5,0,0.7,0.1
                                    s0.4,0.1,0.5,0.2l-0.5,2.7c-0.2-0.1-0.4-0.1-0.6-0.1c-0.2,0-0.4,0-0.6,0c-0.4,0-0.8,0.1-1.3,0.4c-0.4,0.3-0.8,0.8-1.1,1.5v6.2
                                    H301.3z"/>
                                <path className="st23" d="M312.8,318.1l-2.7-10.6h3.1l1,4.9c0.1,0.5,0.2,1.1,0.2,1.6c0.1,0.5,0.2,1,0.2,1.6h0.1
                                    c0.1-0.5,0.2-1.1,0.3-1.6c0.1-0.5,0.2-1,0.3-1.5l1.2-4.9h2.7l1.2,4.9c0.1,0.5,0.2,1.1,0.3,1.6c0.1,0.5,0.2,1,0.3,1.6h0.1
                                    c0.1-0.5,0.2-1.1,0.2-1.6c0.1-0.5,0.1-1,0.2-1.6l1-4.9h2.9l-2.6,10.6h-3.7l-1-4.2c-0.1-0.5-0.2-1-0.3-1.5c-0.1-0.5-0.2-1-0.3-1.6
                                    h-0.1c-0.1,0.6-0.2,1.1-0.3,1.6c-0.1,0.5-0.2,1-0.3,1.5l-0.9,4.2H312.8z"/>
                                <path className="st23" d="M330.4,305.9c-0.5,0-1-0.2-1.3-0.5c-0.3-0.3-0.5-0.7-0.5-1.2c0-0.5,0.2-0.9,0.5-1.2c0.3-0.3,0.8-0.5,1.3-0.5
                                    c0.5,0,1,0.2,1.3,0.5c0.3,0.3,0.5,0.7,0.5,1.2c0,0.5-0.2,0.9-0.5,1.2C331.3,305.7,330.9,305.9,330.4,305.9z M328.8,318.1v-10.6h3.2
                                    v10.6H328.8z"/>
                                <path className="st23" d="M335.2,322.3c-0.4,0-0.8,0-1.1-0.1c-0.3-0.1-0.5-0.1-0.8-0.2l0.6-2.3c0.1,0,0.3,0.1,0.4,0.1
                                    c0.1,0,0.3,0,0.4,0c0.4,0,0.7-0.1,0.9-0.4c0.2-0.3,0.2-0.7,0.2-1.3v-10.7h3.2V318c0,0.6-0.1,1.1-0.2,1.7c-0.1,0.5-0.3,1-0.6,1.4
                                    c-0.3,0.4-0.7,0.7-1.2,0.9C336.5,322.2,335.9,322.3,335.2,322.3z M337.4,305.9c-0.5,0-1-0.2-1.3-0.5c-0.3-0.3-0.5-0.7-0.5-1.2
                                    c0-0.5,0.2-0.9,0.5-1.2c0.3-0.3,0.8-0.5,1.3-0.5c0.5,0,1,0.2,1.3,0.5c0.3,0.3,0.5,0.7,0.5,1.2c0,0.5-0.2,0.9-0.5,1.2
                                    C338.4,305.7,337.9,305.9,337.4,305.9z"/>
                                <path className="st23" d="M346,318.3c-0.7,0-1.4-0.1-2.2-0.4c-0.7-0.3-1.4-0.6-1.9-1.1l1.4-2c0.5,0.4,1,0.7,1.4,0.8
                                    c0.4,0.2,0.9,0.3,1.4,0.3c0.5,0,0.8-0.1,1-0.2c0.2-0.2,0.3-0.4,0.3-0.7c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.3-0.3-0.5-0.4
                                    c-0.2-0.1-0.4-0.2-0.7-0.3c-0.3-0.1-0.5-0.2-0.8-0.3c-0.3-0.1-0.7-0.3-1-0.5c-0.3-0.2-0.6-0.4-0.9-0.6c-0.3-0.2-0.5-0.5-0.7-0.9
                                    c-0.2-0.3-0.3-0.7-0.3-1.2c0-0.5,0.1-0.9,0.3-1.4c0.2-0.4,0.5-0.8,0.8-1.1c0.4-0.3,0.8-0.5,1.3-0.7c0.5-0.2,1.1-0.2,1.7-0.2
                                    c0.8,0,1.5,0.1,2.1,0.4c0.6,0.3,1.2,0.6,1.6,0.9l-1.4,1.9c-0.4-0.3-0.8-0.5-1.1-0.7c-0.4-0.2-0.7-0.2-1.1-0.2
                                    c-0.8,0-1.2,0.3-1.2,0.8c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.7,0.3c0.2,0.1,0.5,0.2,0.8,0.3
                                    c0.3,0.1,0.7,0.3,1,0.4c0.3,0.2,0.6,0.4,0.9,0.6c0.3,0.2,0.5,0.5,0.7,0.9c0.2,0.4,0.3,0.8,0.3,1.3c0,0.5-0.1,0.9-0.3,1.4
                                    c-0.2,0.4-0.5,0.8-0.8,1.1c-0.4,0.3-0.8,0.6-1.4,0.7C347.3,318.2,346.7,318.3,346,318.3z"/>
                            </g>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__hover'>
                        <h4>Visie op onderwijs</h4>
                        <p>
                            De manier waarop de toetsing wordt ingericht is een middel om de visie op onderwijs te realiseren, in plaats van een doel op zich (Baartman, Van Schilt-Mol & Van der Vleuten, 2020). De visie op toetsing, die onderdeel uitmaakt van de visie op onderwijs, vormt het fundament voor het...
                        </p>
                        <p className='toetsmodel-component__center--read-more' onClick={() => setOpen(true)}>Lees meer...</p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M231.7,230.1v-2.3h2.7v-7.2h-2.3v-1.8c0.7-0.1,1.2-0.3,1.7-0.5s0.9-0.4,1.4-0.7h2.1v10.1h2.3v2.3H231.7z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M201,333.5v-2.3h2.7v-7.2h-2.3v-1.8c0.7-0.1,1.2-0.3,1.7-0.5c0.5-0.2,0.9-0.4,1.4-0.7h2.1v10.1h2.3v2.3H201z"
                                />
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M386.8,333.5v-2.3h2.7v-7.2h-2.3v-1.8c0.7-0.1,1.2-0.3,1.7-0.5c0.5-0.2,0.9-0.4,1.4-0.7h2.1v10.1h2.3v2.3
                                H386.8z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M414.6,350v-1.6c0.8-0.7,1.5-1.4,2.2-2.1s1.2-1.2,1.7-1.8c0.5-0.6,0.8-1.1,1.1-1.6c0.3-0.5,0.4-1,0.4-1.4
                                c0-0.6-0.2-1.1-0.5-1.4c-0.3-0.3-0.7-0.5-1.3-0.5c-0.5,0-0.9,0.1-1.2,0.4s-0.7,0.6-1,0.9l-1.6-1.5c0.6-0.7,1.2-1.1,1.9-1.5
                                s1.4-0.5,2.3-0.5c0.6,0,1.2,0.1,1.7,0.3c0.5,0.2,0.9,0.5,1.3,0.8c0.4,0.3,0.6,0.8,0.8,1.2c0.2,0.5,0.3,1,0.3,1.6
                                c0,0.5-0.1,1.1-0.3,1.6c-0.2,0.5-0.5,1.1-0.9,1.6c-0.4,0.5-0.8,1.1-1.3,1.6c-0.5,0.5-1,1.1-1.5,1.6c0.3,0,0.7-0.1,1-0.1
                                c0.4,0,0.7,0,1,0h2.5v2.4H414.6z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                        Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M445.8,368.9c-1,0-1.9-0.2-2.6-0.5s-1.3-0.7-1.7-1.3l1.3-1.8c0.4,0.4,0.8,0.7,1.2,0.9s0.9,0.4,1.5,0.4
                                c0.6,0,1.1-0.1,1.5-0.4c0.4-0.3,0.5-0.6,0.5-1.1c0-0.3,0-0.5-0.1-0.7c-0.1-0.2-0.3-0.4-0.5-0.6c-0.2-0.1-0.6-0.3-1-0.4
                                c-0.4-0.1-1-0.1-1.7-0.1v-2c0.6,0,1,0,1.4-0.1s0.7-0.2,0.9-0.3c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.1-0.4,0.1-0.7
                                c0-0.4-0.1-0.8-0.4-1c-0.3-0.2-0.6-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.2,0.3c-0.4,0.2-0.7,0.5-1.1,0.8l-1.4-1.8c0.6-0.5,1.2-0.9,1.8-1.2
                                c0.6-0.3,1.3-0.4,2.1-0.4c0.6,0,1.2,0.1,1.7,0.2c0.5,0.2,1,0.4,1.3,0.7s0.7,0.6,0.9,1.1c0.2,0.4,0.3,0.9,0.3,1.4
                                c0,0.7-0.2,1.2-0.5,1.7c-0.4,0.4-0.9,0.8-1.5,1.1v0.1c0.7,0.2,1.3,0.6,1.8,1.1c0.5,0.5,0.7,1.2,0.7,2c0,0.6-0.1,1.1-0.4,1.5
                                c-0.2,0.4-0.6,0.8-1,1.1c-0.4,0.3-0.9,0.5-1.5,0.7C447.1,368.8,446.5,368.9,445.8,368.9z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M474.5,386.8v-3h-5.4v-2l4.5-7.5h3.5v7.2h1.4v2.2h-1.4v3H474.5z M471.9,381.6h2.6v-2c0-0.4,0-0.9,0-1.4
                                c0-0.5,0.1-1,0.1-1.4h-0.1c-0.2,0.3-0.3,0.7-0.5,1c-0.2,0.4-0.3,0.7-0.5,1.1L471.9,381.6z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M169.8,346.2v-1.6c0.8-0.7,1.5-1.4,2.2-2.1s1.2-1.2,1.7-1.8c0.5-0.6,0.8-1.1,1.1-1.6c0.3-0.5,0.4-1,0.4-1.4
                                c0-0.6-0.2-1.1-0.5-1.4c-0.3-0.3-0.7-0.5-1.3-0.5c-0.5,0-0.9,0.1-1.2,0.4s-0.7,0.6-1,0.9l-1.6-1.5c0.6-0.7,1.2-1.1,1.9-1.5
                                s1.4-0.5,2.3-0.5c0.6,0,1.2,0.1,1.7,0.3c0.5,0.2,0.9,0.5,1.3,0.8c0.4,0.3,0.6,0.8,0.8,1.2c0.2,0.5,0.3,1,0.3,1.6
                                c0,0.5-0.1,1.1-0.3,1.6c-0.2,0.5-0.5,1.1-0.9,1.6c-0.4,0.5-0.8,1.1-1.3,1.6c-0.5,0.5-1,1.1-1.5,1.6c0.3,0,0.7-0.1,1-0.1
                                c0.4,0,0.7,0,1,0h2.5v2.4H169.8z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                        Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M146,359.5c-1,0-1.9-0.2-2.6-0.5s-1.3-0.7-1.7-1.3l1.3-1.8c0.4,0.4,0.8,0.7,1.2,0.9s0.9,0.4,1.5,0.4
                                c0.6,0,1.1-0.1,1.5-0.4c0.4-0.3,0.5-0.6,0.5-1.1c0-0.3,0-0.5-0.1-0.7c-0.1-0.2-0.3-0.4-0.5-0.6c-0.2-0.1-0.6-0.3-1-0.4
                                c-0.4-0.1-1-0.1-1.7-0.1v-2c0.6,0,1,0,1.4-0.1s0.7-0.2,0.9-0.3c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.1-0.4,0.1-0.7
                                c0-0.4-0.1-0.8-0.4-1c-0.3-0.2-0.6-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.2,0.3c-0.4,0.2-0.7,0.5-1.1,0.8l-1.4-1.8c0.6-0.5,1.2-0.9,1.8-1.2
                                c0.6-0.3,1.3-0.4,2.1-0.4c0.6,0,1.2,0.1,1.7,0.2c0.5,0.2,1,0.4,1.3,0.7s0.7,0.6,0.9,1.1c0.2,0.4,0.3,0.9,0.3,1.4
                                c0,0.7-0.2,1.2-0.5,1.7c-0.4,0.4-0.9,0.8-1.5,1.1v0.1c0.7,0.2,1.3,0.6,1.8,1.1c0.5,0.5,0.7,1.2,0.7,2c0,0.6-0.1,1.1-0.4,1.5
                                c-0.2,0.4-0.6,0.8-1,1.1c-0.4,0.3-0.9,0.5-1.5,0.7C147.2,359.4,146.6,359.5,146,359.5z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M119.7,375v-3h-5.4v-2l4.5-7.5h3.5v7.2h1.4v2.2h-1.4v3H119.7z M117.1,369.8h2.6v-2c0-0.4,0-0.9,0-1.4
                                c0-0.5,0.1-1,0.1-1.4h-0.1c-0.2,0.3-0.3,0.7-0.5,1c-0.2,0.4-0.3,0.7-0.5,1.1L117.1,369.8z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M358.9,230.1v-2.3h2.7v-7.2h-2.3v-1.8c0.7-0.1,1.2-0.3,1.7-0.5s0.9-0.4,1.4-0.7h2.1v10.1h2.3v2.3H358.9z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M294.9,404.1v-2.3h2.7v-7.2h-2.3v-1.8c0.7-0.1,1.2-0.3,1.7-0.5c0.5-0.2,0.9-0.4,1.4-0.7h2.1v10.1h2.3v2.3
                                H294.9z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>1. Activiteiten-georiënteerde fase</h4>
                        <p>
                            Individuele medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren ad hoc op onderdelen toetsactiviteiten uit waarbij geen aandacht is voor de onderlinge samenhang tussen deze activiteiten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M294.2,433.7v-1.6c0.8-0.7,1.5-1.4,2.2-2.1s1.2-1.2,1.7-1.8c0.5-0.6,0.8-1.1,1.1-1.6c0.3-0.5,0.4-1,0.4-1.4
                                c0-0.6-0.2-1.1-0.5-1.4c-0.3-0.3-0.7-0.5-1.3-0.5c-0.5,0-0.9,0.1-1.2,0.4s-0.7,0.6-1,0.9l-1.6-1.5c0.6-0.7,1.2-1.1,1.9-1.5
                                s1.4-0.5,2.3-0.5c0.6,0,1.2,0.1,1.7,0.3c0.5,0.2,0.9,0.5,1.3,0.8c0.4,0.3,0.6,0.8,0.8,1.2c0.2,0.5,0.3,1,0.3,1.6
                                c0,0.5-0.1,1.1-0.3,1.6c-0.2,0.5-0.5,1.1-0.9,1.6c-0.4,0.5-0.8,1.1-1.3,1.6c-0.5,0.5-1,1.1-1.5,1.6c0.3,0,0.7-0.1,1-0.1
                                c0.4,0,0.7,0,1,0h2.5v2.4H294.2z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                        Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M298.2,466.5c-1,0-1.9-0.2-2.6-0.5s-1.3-0.7-1.7-1.3l1.3-1.8c0.4,0.4,0.8,0.7,1.2,0.9s0.9,0.4,1.5,0.4
                                c0.6,0,1.1-0.1,1.5-0.4c0.4-0.3,0.5-0.6,0.5-1.1c0-0.3,0-0.5-0.1-0.7c-0.1-0.2-0.3-0.4-0.5-0.6c-0.2-0.1-0.6-0.3-1-0.4
                                c-0.4-0.1-1-0.1-1.7-0.1v-2c0.6,0,1,0,1.4-0.1s0.7-0.2,0.9-0.3c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.1-0.4,0.1-0.7
                                c0-0.4-0.1-0.8-0.4-1c-0.3-0.2-0.6-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.2,0.3c-0.4,0.2-0.7,0.5-1.1,0.8l-1.4-1.8c0.6-0.5,1.2-0.9,1.8-1.2
                                c0.6-0.3,1.3-0.4,2.1-0.4c0.6,0,1.2,0.1,1.7,0.2c0.5,0.2,1,0.4,1.3,0.7s0.7,0.6,0.9,1.1c0.2,0.4,0.3,0.9,0.3,1.4
                                c0,0.7-0.2,1.2-0.5,1.7c-0.4,0.4-0.9,0.8-1.5,1.1v0.1c0.7,0.2,1.3,0.6,1.8,1.1c0.5,0.5,0.7,1.2,0.7,2c0,0.6-0.1,1.1-0.4,1.5
                                c-0.2,0.4-0.6,0.8-1,1.1c-0.4,0.3-0.9,0.5-1.5,0.7C299.5,466.4,298.9,466.5,298.2,466.5z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M299.2,496.7v-3h-5.4v-2l4.5-7.5h3.5v7.2h1.4v2.2h-1.4v3H299.2z M296.6,491.5h2.6v-2c0-0.4,0-0.9,0-1.4
                                c0-0.5,0.1-1,0.1-1.4h-0.1c-0.2,0.3-0.3,0.7-0.5,1c-0.2,0.4-0.3,0.7-0.5,1.1L296.6,491.5z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>
                
                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M381.6,206.7v-1.6c0.8-0.7,1.5-1.4,2.2-2.1s1.2-1.2,1.7-1.8c0.5-0.6,0.8-1.1,1.1-1.6c0.3-0.5,0.4-1,0.4-1.4
                                c0-0.6-0.2-1.1-0.5-1.4c-0.3-0.3-0.7-0.5-1.3-0.5c-0.5,0-0.9,0.1-1.2,0.4s-0.7,0.6-1,0.9l-1.6-1.5c0.6-0.7,1.2-1.1,1.9-1.5
                                s1.4-0.5,2.3-0.5c0.6,0,1.2,0.1,1.7,0.3c0.5,0.2,0.9,0.5,1.3,0.8c0.4,0.3,0.6,0.8,0.8,1.2c0.2,0.5,0.3,1,0.3,1.6
                                c0,0.5-0.1,1.1-0.3,1.6c-0.2,0.5-0.5,1.1-0.9,1.6c-0.4,0.5-0.8,1.1-1.3,1.6c-0.5,0.5-1,1.1-1.5,1.6c0.3,0,0.7-0.1,1-0.1
                                c0.4,0,0.7,0,1,0h2.5v2.4H381.6z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                        Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M407,185.6c-1,0-1.9-0.2-2.6-0.5s-1.3-0.7-1.7-1.3l1.3-1.8c0.4,0.4,0.8,0.7,1.2,0.9s0.9,0.4,1.5,0.4
                                c0.6,0,1.1-0.1,1.5-0.4c0.4-0.3,0.5-0.6,0.5-1.1c0-0.3,0-0.5-0.1-0.7c-0.1-0.2-0.3-0.4-0.5-0.6c-0.2-0.1-0.6-0.3-1-0.4
                                c-0.4-0.1-1-0.1-1.7-0.1v-2c0.6,0,1,0,1.4-0.1s0.7-0.2,0.9-0.3c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.1-0.4,0.1-0.7
                                c0-0.4-0.1-0.8-0.4-1c-0.3-0.2-0.6-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.2,0.3c-0.4,0.2-0.7,0.5-1.1,0.8l-1.4-1.8c0.6-0.5,1.2-0.9,1.8-1.2
                                c0.6-0.3,1.3-0.4,2.1-0.4c0.6,0,1.2,0.1,1.7,0.2c0.5,0.2,1,0.4,1.3,0.7s0.7,0.6,0.9,1.1c0.2,0.4,0.3,0.9,0.3,1.4
                                c0,0.7-0.2,1.2-0.5,1.7c-0.4,0.4-0.9,0.8-1.5,1.1v0.1c0.7,0.2,1.3,0.6,1.8,1.1c0.5,0.5,0.7,1.2,0.7,2c0,0.6-0.1,1.1-0.4,1.5
                                c-0.2,0.4-0.6,0.8-1,1.1c-0.4,0.3-0.9,0.5-1.5,0.7C408.2,185.6,407.6,185.6,407,185.6z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M430.6,162.8v-3h-5.4v-2l4.5-7.5h3.5v7.2h1.4v2.2h-1.4v3H430.6z M428,157.6h2.6v-2c0-0.4,0-0.9,0-1.4
                                c0-0.5,0.1-1,0.1-1.4h-0.1c-0.2,0.3-0.3,0.7-0.5,1c-0.2,0.4-0.3,0.7-0.5,1.1L428,157.6z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M207.4,206.4v-1.6c0.8-0.7,1.5-1.4,2.2-2.1s1.2-1.2,1.7-1.8c0.5-0.6,0.8-1.1,1.1-1.6c0.3-0.5,0.4-1,0.4-1.4
                                c0-0.6-0.2-1.1-0.5-1.4c-0.3-0.3-0.7-0.5-1.3-0.5c-0.5,0-0.9,0.1-1.2,0.4s-0.7,0.6-1,0.9l-1.6-1.5c0.6-0.7,1.2-1.1,1.9-1.5
                                s1.4-0.5,2.3-0.5c0.6,0,1.2,0.1,1.7,0.3c0.5,0.2,0.9,0.5,1.3,0.8c0.4,0.3,0.6,0.8,0.8,1.2c0.2,0.5,0.3,1,0.3,1.6
                                c0,0.5-0.1,1.1-0.3,1.6c-0.2,0.5-0.5,1.1-0.9,1.6c-0.4,0.5-0.8,1.1-1.3,1.6c-0.5,0.5-1,1.1-1.5,1.6c0.3,0,0.7-0.1,1-0.1
                                c0.4,0,0.7,0,1,0h2.5v2.4H207.4z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>2. Proces-georiënteerde fase</h4>
                        <p>
                        Relevante medewerkers in de opleiding (docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren vanuit een korte termijn perspectief procesmatig toetsactiviteiten uit die onderling samenhangen.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M188.6,183.9c-1,0-1.9-0.2-2.6-0.5s-1.3-0.7-1.7-1.3l1.3-1.8c0.4,0.4,0.8,0.7,1.2,0.9s0.9,0.4,1.5,0.4
                                c0.6,0,1.1-0.1,1.5-0.4c0.4-0.3,0.5-0.6,0.5-1.1c0-0.3,0-0.5-0.1-0.7c-0.1-0.2-0.3-0.4-0.5-0.6c-0.2-0.1-0.6-0.3-1-0.4
                                c-0.4-0.1-1-0.1-1.7-0.1v-2c0.6,0,1,0,1.4-0.1s0.7-0.2,0.9-0.3c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.1-0.4,0.1-0.7
                                c0-0.4-0.1-0.8-0.4-1c-0.3-0.2-0.6-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.2,0.3c-0.4,0.2-0.7,0.5-1.1,0.8l-1.4-1.8c0.6-0.5,1.2-0.9,1.8-1.2
                                c0.6-0.3,1.3-0.4,2.1-0.4c0.6,0,1.2,0.1,1.7,0.2c0.5,0.2,1,0.4,1.3,0.7s0.7,0.6,0.9,1.1c0.2,0.4,0.3,0.9,0.3,1.4
                                c0,0.7-0.2,1.2-0.5,1.7c-0.4,0.4-0.9,0.8-1.5,1.1v0.1c0.7,0.2,1.3,0.6,1.8,1.1c0.5,0.5,0.7,1.2,0.7,2c0,0.6-0.1,1.1-0.4,1.5
                                c-0.2,0.4-0.6,0.8-1,1.1c-0.4,0.3-0.9,0.5-1.5,0.7C189.8,183.8,189.2,183.9,188.6,183.9z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>3. Systeem-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners in de opleiding (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers) voeren gezamenlijk vanuit een middellange termijn perspectief volgens de PDCA-cyclus toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding.
                        </p>
                    </div>
                </Popup>

                <Popup
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    arrow={false}
                    position="bottom center"
                    offsetY={10}
                    closeOnDocumentClick
                    on="hover"
                    contentStyle={{ padding: '0px', border: 'none' }}
                    trigger={
                        <g className='number__hover'>
                            <path className="st23" d="M167.1,161.1v-3h-5.4v-2l4.5-7.5h3.5v7.2h1.4v2.2h-1.4v3H167.1z M164.5,156h2.6v-2c0-0.4,0-0.9,0-1.4
                                c0-0.5,0.1-1,0.1-1.4h-0.1c-0.2,0.3-0.3,0.7-0.5,1c-0.2,0.4-0.3,0.7-0.5,1.1L164.5,156z"/>
                        </g>
                    }
                >
                    <div className='toetsmodel-component__one-hover'>
                        <h4>4. Keten-georiënteerde fase</h4>
                        <p>
                        Alle relevante medewerkers en partners binnen de opleiding en in de keten (studenten, docenten/examinatoren, opleidingsmanagement, examencommissie, toetsexperts/toetscommissie, ondersteunende medewerkers, werkveld en externe deskundigen) voeren gezamenlijk vanuit een lange termijn perspectief volgens de PDCA-cyclus gezamenlijk toetsactiviteiten uit die zijn geïntegreerd in lopende processen binnen de opleiding en de keten.
                        </p>
                    </div>
                </Popup>

                <g>
                    <path className="st23" d="M124.9,165.4l-5-3.8l-1.3,1.7l-1.2-0.9l3.6-4.8l1.2,0.9l-1.3,1.7l5,3.8L124.9,165.4z"/>
                    <path className="st23" d="M129.4,159.9c-0.2,0.3-0.5,0.5-0.8,0.7s-0.7,0.3-1,0.3c-0.4,0-0.8,0-1.2-0.1c-0.4-0.1-0.8-0.3-1.2-0.6
                        c-0.4-0.3-0.7-0.6-0.9-1s-0.3-0.7-0.4-1.1c0-0.4,0-0.7,0.1-1.1c0.1-0.4,0.3-0.7,0.5-1s0.5-0.5,0.8-0.7c0.3-0.2,0.7-0.3,1-0.3
                        c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.8,0.3,1.2,0.6c0.4,0.3,0.7,0.6,0.9,1s0.3,0.7,0.4,1.1c0,0.4,0,0.7-0.1,1.1
                        C129.8,159.3,129.7,159.6,129.4,159.9z M128.3,159c0.2-0.3,0.3-0.6,0.2-0.9s-0.4-0.7-0.8-1c-0.4-0.3-0.8-0.5-1.1-0.6
                        c-0.3,0-0.6,0.1-0.9,0.3c-0.2,0.3-0.3,0.6-0.2,0.9c0.1,0.3,0.4,0.7,0.8,1c0.4,0.3,0.8,0.5,1.1,0.6
                        C127.8,159.4,128.1,159.3,128.3,159z"/>
                    <path className="st23" d="M134,154.4c-0.3,0.3-0.6,0.6-0.9,0.8c-0.3,0.2-0.7,0.3-1.1,0.3c-0.4,0-0.8,0-1.1-0.2
                        c-0.4-0.1-0.8-0.4-1.1-0.7c-0.4-0.3-0.6-0.6-0.8-1c-0.2-0.4-0.3-0.7-0.3-1.1c0-0.4,0-0.7,0.1-1.1c0.1-0.3,0.3-0.7,0.5-0.9
                        c0.3-0.3,0.6-0.5,0.9-0.7c0.3-0.1,0.6-0.2,1-0.2c0.3,0,0.7,0.1,1,0.2s0.6,0.4,0.9,0.6c0.1,0.1,0.2,0.2,0.3,0.3s0.2,0.2,0.2,0.2
                        l-2.3,2.7c0.4,0.2,0.7,0.3,1.1,0.2c0.3-0.1,0.6-0.3,0.9-0.6c0.3-0.3,0.5-0.7,0.5-1.2l1.2,0.2c0,0.4-0.1,0.7-0.3,1.1
                        C134.5,153.8,134.3,154.1,134,154.4z M130.4,152.9l1.4-1.6c-0.3-0.2-0.5-0.3-0.8-0.4c-0.3,0-0.5,0.1-0.7,0.4
                        c-0.2,0.2-0.3,0.5-0.3,0.7C130,152.4,130.1,152.7,130.4,152.9z"/>
                    <path className="st23" d="M138.2,149.8c-0.2,0.3-0.5,0.5-0.7,0.6s-0.5,0.2-0.8,0.2c-0.3,0-0.5-0.1-0.8-0.2c-0.3-0.1-0.5-0.3-0.8-0.5
                        l-1.8-1.6l-0.5,0.6l-1-0.9l0.6-0.7l-1-1.2l1-1.1l1.2,1.1l0.9-1l1,0.9l-0.9,1l1.7,1.6c0.2,0.2,0.5,0.3,0.7,0.3
                        c0.2,0,0.4-0.1,0.5-0.3c0.1-0.1,0.1-0.1,0.2-0.2s0.1-0.2,0.1-0.3l1.1,0.7c-0.1,0.1-0.2,0.3-0.3,0.5S138.3,149.6,138.2,149.8z"/>
                    <path className="st23" d="M141.2,146.5c-0.3,0.3-0.6,0.5-1,0.7c-0.4,0.2-0.8,0.3-1.2,0.4l-0.2-1.3c0.3-0.1,0.6-0.1,0.9-0.2
                        c0.2-0.1,0.5-0.2,0.6-0.4c0.2-0.2,0.3-0.4,0.3-0.5c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.3-0.1s-0.2,0-0.3,0.1
                        c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.3,0.1-0.4,0.2c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0.1-0.4,0.1-0.6,0.1s-0.4,0-0.6-0.1
                        c-0.2-0.1-0.4-0.2-0.6-0.3c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.1-0.5-0.1-0.7s0.1-0.5,0.2-0.8c0.1-0.3,0.3-0.5,0.5-0.8
                        c0.3-0.3,0.6-0.6,1-0.7c0.3-0.1,0.7-0.2,1-0.3l0.2,1.3c-0.3,0-0.5,0.1-0.7,0.2s-0.4,0.2-0.5,0.4c-0.3,0.3-0.3,0.6-0.1,0.8
                        c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.4-0.2c0.1-0.1,0.3-0.1,0.4-0.2c0.2-0.1,0.4-0.2,0.6-0.2
                        c0.2-0.1,0.4-0.1,0.6-0.1c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.4,0.2,0.6,0.4c0.2,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.1,0.5,0.1,0.7
                        c0,0.3-0.1,0.5-0.2,0.8C141.7,146,141.5,146.3,141.2,146.5z"/>
                    <path className="st23" d="M146.6,143.8c-0.9-0.2-1.8-0.5-2.6-1s-1.6-1-2.3-1.7c-0.7-0.7-1.3-1.5-1.7-2.3c-0.4-0.8-0.8-1.7-1-2.6
                        l1.1-0.5c0.2,0.9,0.6,1.7,1,2.4c0.5,0.7,1,1.4,1.6,2c0.6,0.6,1.3,1.1,2,1.6s1.5,0.8,2.4,1L146.6,143.8z"/>
                    <path className="st23" d="M148.9,138.8c-0.3,0.3-0.5,0.4-0.8,0.5c-0.3,0.1-0.5,0.1-0.8,0.1c-0.3,0-0.5-0.1-0.8-0.3
                        c-0.2-0.1-0.5-0.3-0.7-0.6l-1.7-1.7l-0.6,0.6l-0.9-0.9l0.6-0.7l-1-1.3l1-1l1.1,1.1l1-1l1,1l-1,1l1.7,1.7c0.2,0.2,0.5,0.4,0.7,0.4
                        c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.1,0.2-0.2s0.1-0.2,0.1-0.2l1.1,0.7c-0.1,0.1-0.2,0.3-0.3,0.5
                        C149.3,138.4,149.1,138.6,148.9,138.8z"/>
                    <path className="st23" d="M151.9,136c-0.2,0.2-0.4,0.3-0.6,0.4c-0.2,0.1-0.4,0.1-0.7,0.1c-0.2,0-0.4-0.1-0.6-0.2
                        c-0.2-0.1-0.4-0.2-0.6-0.4c-0.4-0.5-0.5-1-0.4-1.6c0.2-0.6,0.6-1.3,1.4-2.2c-0.2-0.2-0.4-0.3-0.6-0.3s-0.4,0.1-0.7,0.3
                        c-0.2,0.2-0.3,0.4-0.5,0.6c-0.1,0.2-0.2,0.5-0.3,0.8l-1.2-0.4c0.1-0.4,0.3-0.8,0.5-1.2c0.2-0.4,0.5-0.7,0.8-1
                        c0.6-0.5,1.1-0.7,1.7-0.7s1.2,0.4,1.8,1.1l2.3,2.5l-1.1,1l-0.5-0.4l0,0c0,0.3-0.1,0.6-0.2,0.9C152.3,135.6,152.1,135.8,151.9,136z
                        M151.4,134.6c0.1-0.1,0.2-0.3,0.3-0.4c0-0.2,0.1-0.4,0.1-0.6l-0.7-0.8c-0.4,0.5-0.6,0.9-0.7,1.1c-0.1,0.3,0,0.5,0.1,0.7
                        c0.1,0.1,0.3,0.2,0.4,0.2C151.1,134.8,151.3,134.8,151.4,134.6z"/>
                    <path className="st23" d="M155.8,132.4l-5.4-6.3l1.3-1.1l3.1,3.6l0,0l-0.1-3l1.4-1.2l0,3.2l3.9,1.2l-1.4,1.2l-2.5-0.9l0,1.1l0.9,1.1
                        L155.8,132.4z"/>
                    <path className="st23" d="M163.2,128.9l-1.1,0.3c-0.1-0.9-0.4-1.7-0.8-2.5c-0.4-0.8-0.8-1.5-1.4-2.2c-0.5-0.7-1.1-1.3-1.8-1.8
                        c-0.7-0.5-1.4-1-2.3-1.3l0.6-1c0.9,0.3,1.7,0.7,2.5,1.2c0.8,0.5,1.5,1.2,2.1,2c0.7,0.8,1.2,1.6,1.5,2.5
                        C162.8,127.1,163,128,163.2,128.9z"/>
                    <path className="st23" d="M166.9,123.5c-0.3,0.3-0.7,0.4-1.1,0.5s-0.7,0.1-1.1,0.1c-0.4,0-0.7-0.2-1.1-0.4c-0.3-0.2-0.7-0.5-1-0.9
                        c-0.3-0.4-0.5-0.8-0.6-1.2c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0.2-0.7,0.3-1c0.2-0.3,0.4-0.6,0.7-0.8c0.3-0.3,0.7-0.4,1-0.5
                        c0.3-0.1,0.7-0.1,1,0s0.6,0.2,0.9,0.4s0.6,0.5,0.8,0.8c0.1,0.1,0.2,0.2,0.3,0.4c0.1,0.1,0.1,0.2,0.2,0.3l-2.8,2.1
                        c0.3,0.3,0.7,0.4,1,0.4c0.3,0,0.7-0.1,1-0.4c0.3-0.3,0.6-0.6,0.8-1.1l1.1,0.5c-0.1,0.3-0.3,0.7-0.5,1
                        C167.4,123,167.2,123.3,166.9,123.5z M163.6,121.3l1.7-1.3c-0.2-0.3-0.4-0.4-0.7-0.5s-0.5,0-0.8,0.2c-0.2,0.2-0.4,0.4-0.4,0.7
                        C163.4,120.7,163.4,121,163.6,121.3z"/>
                    <path className="st23" d="M170,120.9l-3.4-4.8l1.2-0.8l0.5,0.5l0,0c0.1-0.3,0.2-0.7,0.3-1c0.1-0.3,0.4-0.6,0.7-0.8
                        c0.5-0.4,1-0.5,1.5-0.3c0.5,0.2,0.9,0.6,1.4,1.2l2.1,3l-1.4,1l-2-2.8c-0.2-0.3-0.5-0.6-0.7-0.6c-0.2-0.1-0.4,0-0.6,0.1
                        c-0.2,0.1-0.3,0.3-0.4,0.5c-0.1,0.2-0.1,0.4-0.2,0.6l2.3,3.2L170,120.9z"/>
                </g>
                <g>
                    <path className="st23" d="M416.1,113.9l3.4-5.2l-1.8-1.2l0.8-1.2l5,3.3l-0.8,1.2l-1.8-1.2l-3.4,5.2L416.1,113.9z"/>
                    <path className="st23" d="M422,118c-0.3-0.2-0.6-0.5-0.8-0.8c-0.2-0.3-0.3-0.7-0.4-1c-0.1-0.4-0.1-0.8,0-1.2c0.1-0.4,0.3-0.8,0.6-1.2
                        c0.3-0.4,0.6-0.7,0.9-0.9c0.3-0.2,0.7-0.4,1.1-0.4c0.4-0.1,0.7-0.1,1.1,0c0.4,0.1,0.7,0.2,1,0.4c0.3,0.2,0.6,0.5,0.8,0.8
                        s0.3,0.6,0.4,1c0.1,0.4,0.1,0.8,0,1.2c-0.1,0.4-0.3,0.8-0.6,1.2c-0.3,0.4-0.6,0.7-0.9,0.9c-0.3,0.2-0.7,0.4-1.1,0.4
                        c-0.4,0.1-0.7,0.1-1.1,0S422.3,118.2,422,118z M422.8,116.8c0.3,0.2,0.6,0.2,0.9,0.1c0.3-0.1,0.6-0.4,0.9-0.8
                        c0.3-0.4,0.5-0.8,0.5-1.2c0-0.3-0.1-0.6-0.4-0.8c-0.3-0.2-0.6-0.2-0.9-0.1c-0.3,0.1-0.6,0.4-0.9,0.8c-0.3,0.4-0.5,0.8-0.5,1.2
                        C422.3,116.3,422.5,116.6,422.8,116.8z"/>
                    <path className="st23" d="M427.8,122.2c-0.3-0.3-0.6-0.5-0.8-0.9c-0.2-0.3-0.3-0.7-0.4-1.1s0-0.8,0.1-1.2c0.1-0.4,0.3-0.8,0.6-1.2
                        c0.3-0.4,0.6-0.7,1-0.9c0.4-0.2,0.7-0.3,1.1-0.4s0.7,0,1.1,0c0.4,0.1,0.7,0.2,1,0.4c0.3,0.2,0.6,0.5,0.8,0.8
                        c0.2,0.3,0.3,0.6,0.3,0.9c0,0.3,0,0.7-0.2,1c-0.1,0.3-0.3,0.7-0.5,1c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.2,0.2l-2.8-2.1
                        c-0.2,0.4-0.2,0.7-0.1,1.1s0.3,0.6,0.6,0.8c0.3,0.3,0.8,0.4,1.2,0.4l-0.2,1.2c-0.4,0-0.7-0.1-1.1-0.2
                        C428.4,122.6,428.1,122.4,427.8,122.2z M429,118.5l1.7,1.3c0.2-0.3,0.3-0.5,0.3-0.8c0-0.3-0.1-0.5-0.4-0.7
                        c-0.2-0.2-0.5-0.2-0.7-0.2C429.5,118,429.3,118.2,429,118.5z"/>
                    <path className="st23" d="M432.7,126c-0.3-0.2-0.5-0.5-0.6-0.7c-0.1-0.2-0.2-0.5-0.2-0.8c0-0.3,0-0.5,0.2-0.8s0.3-0.5,0.5-0.8l1.5-1.9
                        l-0.6-0.5l0.8-1l0.8,0.5l1.1-1.1l1.1,0.9l-1,1.2l1.1,0.9l-0.8,1.1l-1.1-0.9l-1.5,1.9c-0.2,0.3-0.3,0.5-0.3,0.7
                        c0,0.2,0.1,0.4,0.3,0.5c0.1,0.1,0.2,0.1,0.2,0.2c0.1,0,0.2,0.1,0.3,0.1l-0.6,1.2c-0.2-0.1-0.3-0.1-0.5-0.2
                        C433.1,126.3,432.9,126.2,432.7,126z"/>
                    <path className="st23" d="M436.1,128.8c-0.3-0.2-0.6-0.6-0.8-0.9c-0.2-0.4-0.4-0.8-0.4-1.1l1.3-0.3c0.1,0.3,0.2,0.6,0.3,0.8
                        c0.1,0.2,0.3,0.4,0.5,0.6c0.2,0.2,0.4,0.3,0.5,0.3c0.1,0,0.3,0,0.4-0.2c0.1-0.1,0.1-0.2,0.1-0.3s0-0.2-0.1-0.3s-0.1-0.2-0.2-0.4
                        c-0.1-0.1-0.2-0.3-0.2-0.4c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.2-0.1-0.4-0.2-0.6c0-0.2,0-0.4,0-0.6c0-0.2,0.1-0.4,0.3-0.6
                        c0.2-0.2,0.4-0.4,0.6-0.5c0.2-0.1,0.5-0.2,0.7-0.2c0.3,0,0.5,0.1,0.8,0.2c0.3,0.1,0.5,0.3,0.8,0.5c0.3,0.3,0.6,0.6,0.8,0.9
                        c0.2,0.3,0.3,0.7,0.4,1l-1.3,0.3c-0.1-0.3-0.1-0.5-0.2-0.7c-0.1-0.2-0.2-0.4-0.4-0.5c-0.3-0.3-0.6-0.3-0.8-0.1
                        c-0.1,0.1-0.1,0.2-0.1,0.2c0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.4c0.1,0.1,0.2,0.3,0.2,0.4c0.1,0.2,0.2,0.4,0.3,0.5
                        c0.1,0.2,0.1,0.4,0.2,0.6c0,0.2,0,0.4,0,0.6s-0.2,0.4-0.3,0.6s-0.4,0.4-0.6,0.5s-0.5,0.2-0.7,0.2c-0.3,0-0.5-0.1-0.8-0.2
                        C436.8,129.2,436.5,129,436.1,128.8z"/>
                    <path className="st23" d="M437.9,132.9l5.3-6.1l1.1,0.9l-0.3,0.5l0,0c0.3,0,0.6,0,0.9,0.1c0.3,0.1,0.6,0.2,0.8,0.4
                        c0.3,0.2,0.5,0.5,0.6,0.8c0.1,0.3,0.2,0.6,0.1,0.9c0,0.3-0.1,0.7-0.3,1c-0.2,0.3-0.4,0.7-0.7,1c-0.3,0.4-0.7,0.7-1,0.9
                        c-0.4,0.2-0.7,0.3-1.1,0.4c-0.4,0.1-0.7,0-1-0.1s-0.6-0.2-0.8-0.4c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.2-0.5-0.2-0.8l-0.6,0.7
                        l-1.1,1.3L437.9,132.9z M442.2,132.1c0.2,0.2,0.5,0.3,0.8,0.2c0.3-0.1,0.7-0.3,1.1-0.8c0.7-0.8,0.8-1.4,0.3-1.9
                        c-0.3-0.2-0.6-0.3-1.1-0.3l-1.6,1.8c0,0.2,0.1,0.4,0.2,0.5C442,131.8,442.1,132,442.2,132.1z"/>
                    <path className="st23" d="M444.8,136.2l4-4.3l1,1l-0.6,0.8l0,0c0.4-0.1,0.8-0.2,1.2-0.1c0.3,0.1,0.6,0.2,0.9,0.4
                        c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.1,0.2,0.2,0.3l-1.2,0.9c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.2
                        c-0.2-0.2-0.4-0.2-0.7-0.3c-0.3,0-0.6,0-1,0.2l-2.3,2.5L444.8,136.2z"/>
                    <path className="st23" d="M450.3,141.5c-0.3-0.3-0.5-0.6-0.6-0.9c-0.2-0.3-0.2-0.7-0.2-1.1c0-0.4,0.1-0.7,0.2-1.1
                        c0.2-0.4,0.4-0.7,0.8-1.1s0.7-0.6,1.1-0.8s0.8-0.2,1.1-0.2c0.4,0,0.7,0.1,1.1,0.2c0.3,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.6,0.6,0.9
                        c0.1,0.3,0.2,0.7,0.2,1.1c0,0.4-0.1,0.8-0.2,1.1s-0.4,0.8-0.8,1.1c-0.3,0.3-0.7,0.6-1.1,0.8c-0.4,0.2-0.8,0.2-1.1,0.2
                        s-0.7-0.1-1.1-0.2C450.8,142,450.5,141.8,450.3,141.5z M451.3,140.5c0.3,0.2,0.5,0.3,0.9,0.2c0.3-0.1,0.7-0.3,1.1-0.7
                        c0.4-0.4,0.6-0.7,0.7-1.1c0.1-0.3,0-0.6-0.3-0.9c-0.3-0.3-0.6-0.3-0.9-0.2c-0.3,0.1-0.7,0.3-1,0.7c-0.4,0.4-0.6,0.7-0.7,1.1
                        S451,140.3,451.3,140.5z"/>
                    <path className="st23" d="M453.2,147.9c-0.2-0.3-0.4-0.5-0.6-0.8c-0.2-0.3-0.3-0.5-0.3-0.8c-0.1-0.2-0.1-0.5,0-0.7s0.2-0.4,0.4-0.6
                        c0.3-0.3,0.8-0.4,1.4-0.2l0,0c0-0.2,0-0.4,0-0.6c0-0.2,0.2-0.4,0.3-0.5c0.2-0.1,0.3-0.2,0.6-0.3c0.2,0,0.5,0,0.7,0l0,0
                        c0-0.2,0-0.5,0.1-0.8c0.1-0.3,0.2-0.6,0.5-0.8c0.3-0.2,0.5-0.4,0.8-0.5c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0,0.6,0.1,0.8,0.3
                        c0.3,0.2,0.5,0.3,0.7,0.6c0.2,0.3,0.4,0.5,0.5,0.8l1.5,1.6l-0.9,0.9l-0.6-0.7c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                        c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.5,0.1-0.8,0.1c-0.3,0-0.5-0.1-0.8-0.3c-0.2-0.1-0.5-0.3-0.7-0.6c-0.2-0.2-0.3-0.4-0.4-0.6
                        c-0.1,0-0.2,0-0.3,0s-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.2-0.1,0.4s0.2,0.3,0.4,0.6l0.7,0.7c0.5,0.5,0.8,1,0.9,1.4
                        c0.1,0.4,0,0.8-0.4,1.2c-0.2,0.2-0.5,0.4-0.8,0.4c-0.3,0.1-0.6,0.1-0.9,0c-0.3-0.1-0.7-0.2-1-0.4
                        C453.9,148.6,453.6,148.3,453.2,147.9z M454.2,147.3c0.3,0.3,0.5,0.5,0.8,0.6c0.3,0.1,0.5,0.1,0.6-0.1c0.1-0.1,0.2-0.3,0.1-0.4
                        c-0.1-0.2-0.2-0.3-0.4-0.6l-0.4-0.4c-0.1-0.1-0.3-0.3-0.3-0.4c-0.1-0.1-0.1-0.2-0.2-0.3c-0.3,0-0.5,0-0.6,0.2
                        c-0.2,0.2-0.2,0.4-0.1,0.6C453.8,146.8,453.9,147.1,454.2,147.3z M457.3,144.3c0.2,0.2,0.3,0.2,0.6,0.2s0.5-0.1,0.7-0.3
                        c0.2-0.2,0.3-0.4,0.4-0.7c0-0.2-0.1-0.4-0.2-0.6c-0.2-0.2-0.3-0.2-0.6-0.3s-0.4,0.1-0.7,0.3c-0.2,0.2-0.4,0.5-0.4,0.7
                        C457,143.9,457.1,144.1,457.3,144.3z"/>
                    <path className="st23" d="M458.3,149.7l4.4-3.9l1,1.1l-0.7,0.8l0,0c0.4-0.1,0.8-0.1,1.2,0c0.3,0.1,0.6,0.3,0.8,0.5
                        c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.1,0.2,0.1,0.3l-1.3,0.8c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3
                        c-0.1-0.2-0.4-0.3-0.6-0.4s-0.6,0-1,0.1l-2.5,2.3L458.3,149.7z"/>
                    <path className="st23" d="M462.5,154.6c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.1-0.4-0.1-0.7c0-0.2,0.1-0.4,0.2-0.6
                        c0.1-0.2,0.3-0.4,0.4-0.5c0.5-0.4,1-0.5,1.6-0.3c0.6,0.2,1.3,0.7,2.2,1.5c0.2-0.2,0.3-0.4,0.3-0.6c0-0.2-0.1-0.4-0.3-0.7
                        c-0.2-0.2-0.4-0.4-0.6-0.5c-0.2-0.1-0.5-0.2-0.8-0.4l0.5-1.2c0.4,0.1,0.8,0.3,1.2,0.5c0.4,0.2,0.7,0.5,1,0.9
                        c0.5,0.6,0.7,1.2,0.6,1.7c-0.1,0.6-0.4,1.2-1.1,1.8l-2.6,2.2l-0.9-1.1l0.4-0.5l0,0c-0.3,0-0.6-0.1-0.9-0.3S462.7,154.8,462.5,154.6
                        z M463.9,154.1c0.1,0.1,0.3,0.2,0.4,0.3c0.2,0.1,0.3,0.1,0.6,0.1l0.8-0.7c-0.5-0.4-0.8-0.7-1.1-0.7c-0.3-0.1-0.5,0-0.7,0.1
                        c-0.1,0.1-0.2,0.3-0.2,0.4C463.7,153.8,463.7,154,463.9,154.1z"/>
                    <path className="st23" d="M466,158.5l4.6-3.6l0.9,1.1l-0.5,0.6l0,0c0.3,0,0.7,0.1,1,0.2s0.6,0.3,0.8,0.6c0.3,0.3,0.4,0.6,0.4,1
                        c0,0.3,0,0.6-0.2,0.9c0.4,0,0.7,0.1,1.1,0.2c0.3,0.1,0.6,0.3,0.9,0.6c0.4,0.5,0.5,1,0.4,1.5c-0.1,0.5-0.5,1-1.1,1.4l-2.9,2.3
                        l-1.1-1.4l2.7-2.1c0.3-0.3,0.5-0.5,0.6-0.7c0.1-0.2,0-0.4-0.2-0.6c-0.2-0.2-0.5-0.4-1.1-0.4l-3.1,2.5l-1.1-1.4l2.7-2.1
                        c0.3-0.3,0.5-0.5,0.6-0.7c0.1-0.2,0-0.4-0.2-0.6c-0.2-0.2-0.5-0.4-1.1-0.4l-3.1,2.5L466,158.5z"/>
                    <path className="st23" d="M472.6,166.9l4.8-3.4l0.8,1.2l-0.5,0.5l0,0c0.3,0.1,0.7,0.1,1,0.3c0.3,0.1,0.6,0.3,0.8,0.7
                        c0.2,0.3,0.4,0.7,0.4,1s-0.1,0.6-0.2,0.9c0.4,0.1,0.7,0.1,1,0.3c0.3,0.1,0.6,0.3,0.8,0.7c0.4,0.5,0.5,1,0.3,1.5
                        c-0.2,0.5-0.6,0.9-1.2,1.4l-3,2.1l-1-1.4l2.8-2c0.3-0.2,0.6-0.5,0.6-0.6c0.1-0.2,0-0.4-0.1-0.6c-0.2-0.2-0.5-0.4-1-0.5l-3.2,2.3
                        l-1-1.4l2.8-2c0.3-0.2,0.6-0.5,0.6-0.6c0.1-0.2,0-0.4-0.1-0.6c-0.2-0.2-0.5-0.4-1-0.5l-3.2,2.3L472.6,166.9z"/>
                    <path className="st23" d="M479.4,176.9c-0.1-0.2-0.2-0.5-0.3-0.7c0-0.2,0-0.5,0-0.7c0.1-0.2,0.1-0.4,0.3-0.6c0.1-0.2,0.3-0.3,0.5-0.5
                        c0.5-0.3,1.1-0.4,1.6-0.1c0.6,0.2,1.2,0.8,2,1.7c0.2-0.2,0.3-0.3,0.4-0.5c0.1-0.2,0-0.4-0.2-0.7c-0.1-0.2-0.3-0.4-0.5-0.6
                        c-0.2-0.2-0.5-0.3-0.8-0.5l0.6-1.2c0.4,0.2,0.8,0.4,1.1,0.7c0.3,0.3,0.6,0.6,0.9,1c0.4,0.6,0.6,1.2,0.4,1.8
                        c-0.1,0.6-0.6,1.1-1.4,1.6l-2.8,1.8l-0.8-1.2l0.4-0.4l0,0c-0.3-0.1-0.6-0.2-0.9-0.4C479.8,177.4,479.6,177.2,479.4,176.9z
                        M480.8,176.7c0.1,0.2,0.2,0.3,0.4,0.4c0.1,0.1,0.3,0.1,0.6,0.2l0.9-0.6c-0.4-0.5-0.7-0.8-1-0.9c-0.3-0.1-0.5-0.1-0.7,0
                        c-0.2,0.1-0.2,0.2-0.3,0.4S480.7,176.5,480.8,176.7z"/>
                </g>
                <g>
                    <path className="st23" d="M477.3,434.1l-5.1-3.9l-1.3,1.7l-1.2-0.9l3.7-4.9l1.2,0.9l-1.3,1.7l5.1,3.9L477.3,434.1z"/>
                    <path className="st23" d="M481.7,428.4c-0.2,0.3-0.5,0.6-0.8,0.8c-0.3,0.2-0.7,0.3-1,0.4c-0.4,0.1-0.8,0-1.2-0.1
                        c-0.4-0.1-0.8-0.3-1.2-0.6c-0.4-0.3-0.7-0.6-0.9-1c-0.2-0.4-0.4-0.7-0.4-1.1s0-0.7,0.1-1.1c0.1-0.4,0.3-0.7,0.5-1
                        c0.2-0.3,0.5-0.6,0.8-0.8c0.3-0.2,0.7-0.3,1-0.4c0.4-0.1,0.8,0,1.2,0.1c0.4,0.1,0.8,0.3,1.2,0.6s0.7,0.6,0.9,1
                        c0.2,0.4,0.4,0.7,0.4,1.1c0.1,0.4,0,0.7-0.1,1.1C482.1,427.7,482,428.1,481.7,428.4z M480.6,427.5c0.2-0.3,0.2-0.6,0.1-0.9
                        c-0.1-0.3-0.4-0.6-0.8-1c-0.4-0.3-0.8-0.5-1.2-0.5c-0.4,0-0.6,0.1-0.9,0.4c-0.2,0.3-0.3,0.6-0.1,0.9c0.1,0.3,0.4,0.6,0.9,1
                        c0.4,0.3,0.8,0.5,1.2,0.5C480.1,428,480.4,427.9,480.6,427.5z"/>
                    <path className="st23" d="M486,422.3c-0.2,0.4-0.5,0.6-0.8,0.9c-0.3,0.2-0.7,0.4-1.1,0.5c-0.4,0.1-0.8,0.1-1.2,0
                        c-0.4-0.1-0.8-0.3-1.2-0.6c-0.4-0.3-0.7-0.6-1-0.9s-0.4-0.7-0.5-1.1c-0.1-0.4-0.1-0.7,0-1.1c0.1-0.4,0.2-0.7,0.4-1
                        c0.2-0.4,0.5-0.6,0.8-0.8c0.3-0.2,0.6-0.3,1-0.3c0.3,0,0.7,0,1,0.1c0.4,0.1,0.7,0.3,1,0.5c0.1,0.1,0.3,0.2,0.4,0.3
                        c0.1,0.1,0.2,0.2,0.2,0.2l-2,3c0.4,0.2,0.8,0.2,1.1,0.1c0.3-0.1,0.6-0.3,0.8-0.7c0.2-0.4,0.4-0.8,0.4-1.3l1.2,0.1
                        c0,0.4-0.1,0.7-0.2,1.1C486.3,421.7,486.2,422,486,422.3z M482.1,421.3l1.2-1.8c-0.3-0.2-0.6-0.3-0.8-0.3c-0.3,0-0.5,0.2-0.7,0.5
                        c-0.2,0.2-0.2,0.5-0.2,0.8S481.8,421,482.1,421.3z"/>
                    <path className="st23" d="M489.4,417c-0.2,0.3-0.4,0.6-0.7,0.7s-0.5,0.3-0.7,0.3s-0.5,0-0.8-0.1c-0.3-0.1-0.6-0.2-0.9-0.4l-2.1-1.3
                        l-0.4,0.7l-1.1-0.7l0.4-0.8l-1.2-1l0.8-1.2l1.3,0.9l0.8-1.2l1.2,0.7l-0.8,1.2l2,1.3c0.3,0.2,0.5,0.3,0.7,0.2c0.2,0,0.4-0.2,0.5-0.4
                        c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.1-0.3l1.2,0.5c0,0.2-0.1,0.3-0.2,0.6C489.7,416.6,489.6,416.8,489.4,417z"/>
                    <path className="st23" d="M491.8,413.2c-0.2,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.7,0.5-1.1,0.6l-0.5-1.3c0.3-0.1,0.6-0.3,0.8-0.4
                        c0.2-0.2,0.4-0.3,0.5-0.6c0.1-0.2,0.2-0.4,0.2-0.6c0-0.1-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.3,0c-0.1,0-0.2,0.1-0.3,0.1
                        c-0.1,0.1-0.2,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.2-0.5,0.3c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0.1-0.4,0.1-0.6,0.1
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.1-0.4-0.3-0.6-0.5s-0.2-0.4-0.3-0.7c0-0.3,0-0.5,0-0.8c0.1-0.3,0.2-0.6,0.4-0.9
                        c0.2-0.4,0.5-0.7,0.8-0.9c0.3-0.2,0.6-0.4,0.9-0.5l0.5,1.2c-0.3,0.1-0.5,0.2-0.7,0.4s-0.3,0.3-0.4,0.5c-0.2,0.4-0.2,0.7,0.1,0.8
                        c0.1,0.1,0.2,0.1,0.3,0c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,0.3-0.2s0.2-0.2,0.4-0.3c0.2-0.1,0.3-0.2,0.5-0.4s0.4-0.2,0.6-0.3
                        s0.4-0.1,0.6-0.1c0.2,0,0.4,0.1,0.7,0.2c0.2,0.1,0.4,0.3,0.6,0.5s0.2,0.5,0.3,0.7c0,0.3,0,0.6,0,0.9
                        C492.2,412.5,492,412.8,491.8,413.2z"/>
                    <path className="st23" d="M495.6,406.7c-0.1,0.2-0.3,0.4-0.6,0.6s-0.5,0.3-0.9,0.4l0,0l0.5,0.4l-0.7,1.2l-7.4-4.1l0.9-1.6l1.8,1
                        l0.8,0.5c-0.1-0.3-0.1-0.6-0.1-0.9c0-0.3,0.1-0.6,0.2-0.8c0.2-0.3,0.4-0.6,0.7-0.8c0.3-0.2,0.6-0.3,0.9-0.4c0.3-0.1,0.7,0,1.1,0.1
                        c0.4,0.1,0.8,0.2,1.2,0.5c0.5,0.3,0.8,0.5,1.1,0.9c0.3,0.3,0.5,0.7,0.6,1c0.1,0.3,0.2,0.7,0.2,1
                        C495.9,406.1,495.8,406.4,495.6,406.7z M494.1,406.3c0.1-0.3,0.2-0.6,0-0.9s-0.5-0.6-1-0.9c-0.9-0.5-1.6-0.5-1.9,0.1
                        c-0.2,0.3-0.2,0.7,0,1.2l2.1,1.2c0.2-0.1,0.4-0.2,0.5-0.3C494,406.6,494.1,406.5,494.1,406.3z"/>
                    <path className="st23" d="M499,400.5c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.6,0.5-1,0.6c-0.4,0.1-0.8,0.2-1.2,0.1c-0.4,0-0.8-0.2-1.3-0.4
                        c-0.4-0.2-0.8-0.5-1.1-0.8c-0.3-0.3-0.5-0.7-0.6-1c-0.1-0.4-0.2-0.7-0.1-1.1c0-0.4,0.1-0.7,0.3-1c0.2-0.4,0.4-0.7,0.7-0.9
                        c0.3-0.2,0.6-0.4,0.9-0.4c0.3-0.1,0.7-0.1,1,0s0.7,0.2,1.1,0.4c0.1,0.1,0.3,0.2,0.4,0.2s0.2,0.1,0.3,0.2l-1.7,3.2
                        c0.4,0.1,0.8,0.1,1.1,0c0.3-0.2,0.6-0.4,0.7-0.8c0.2-0.4,0.3-0.8,0.2-1.3l1.2,0c0,0.4,0,0.7,0,1.1
                        C499.2,399.8,499.1,400.2,499,400.5z M495,399.9l1-1.9c-0.3-0.2-0.6-0.2-0.8-0.2c-0.3,0-0.5,0.2-0.6,0.5c-0.1,0.3-0.2,0.5-0.1,0.8
                        C494.5,399.4,494.6,399.7,495,399.9z"/>
                    <path className="st23" d="M501.6,395.3c-0.1,0.3-0.3,0.5-0.5,0.6c-0.2,0.1-0.4,0.2-0.6,0.3c-0.2,0-0.4,0-0.7,0s-0.5-0.2-0.8-0.3
                        l-5.9-2.9l0.8-1.6l6,3c0.2,0.1,0.3,0.1,0.4,0.1c0.1,0,0.2-0.1,0.2-0.1c0,0,0-0.1,0-0.1s0-0.1,0-0.1l1.3,0.4c0,0.1,0,0.2-0.1,0.4
                        C501.7,395,501.7,395.1,501.6,395.3z"/>
                    <path className="st23" d="M503.7,390.7c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.6,0.5-1,0.6c-0.4,0.1-0.7,0.2-1.2,0.2
                        c-0.4,0-0.9-0.1-1.3-0.3c-0.4-0.2-0.8-0.5-1.1-0.8s-0.5-0.6-0.6-1c-0.1-0.4-0.2-0.7-0.2-1.1c0-0.4,0.1-0.7,0.2-1
                        c0.2-0.4,0.4-0.7,0.7-0.9c0.3-0.2,0.6-0.4,0.9-0.5c0.3-0.1,0.7-0.1,1-0.1s0.7,0.2,1.1,0.3c0.1,0.1,0.3,0.1,0.4,0.2
                        c0.1,0.1,0.2,0.1,0.3,0.2l-1.5,3.3c0.4,0.1,0.8,0.1,1.1-0.1c0.3-0.2,0.5-0.4,0.7-0.8c0.2-0.4,0.2-0.8,0.2-1.3l1.2-0.1
                        c0.1,0.4,0.1,0.7,0,1.1C504,390,503.9,390.4,503.7,390.7z M499.7,390.4l0.9-2c-0.3-0.1-0.6-0.2-0.8-0.1c-0.3,0.1-0.5,0.2-0.6,0.6
                        c-0.1,0.3-0.1,0.5-0.1,0.8C499.2,389.9,499.4,390.1,499.7,390.4z"/>
                    <path className="st23" d="M499.3,383.3c-0.1,0.3-0.3,0.5-0.5,0.6c-0.2,0.1-0.5,0.1-0.7,0c-0.3-0.1-0.4-0.3-0.5-0.5
                        c-0.1-0.2-0.1-0.5,0.1-0.8c0.1-0.3,0.3-0.5,0.5-0.6c0.2-0.1,0.5-0.1,0.7,0c0.3,0.1,0.4,0.3,0.5,0.5
                        C499.5,382.8,499.5,383.1,499.3,383.3z M505.3,386.9l-5.5-2.4l0.7-1.6l5.5,2.4L505.3,386.9z"/>
                    <path className="st23" d="M507.8,381.4c-0.1,0.3-0.3,0.6-0.6,0.9c-0.2,0.2-0.5,0.4-0.9,0.5c-0.3,0.1-0.7,0.1-1.1,0.1s-0.8-0.1-1.3-0.3
                        c-0.5-0.2-0.8-0.4-1.1-0.7s-0.5-0.6-0.7-0.9c-0.2-0.3-0.3-0.6-0.3-1c0-0.3,0-0.6,0.1-0.9c0.1-0.3,0.3-0.6,0.5-0.7s0.4-0.3,0.7-0.4
                        l-0.9-0.3l-1.9-0.8l0.7-1.7l7.9,3.2l-0.5,1.3l-0.6-0.1l0,0c0.1,0.3,0.2,0.6,0.2,0.9C507.9,380.8,507.9,381.1,507.8,381.4z
                        M506.6,380.4c0.1-0.2,0.1-0.4,0.1-0.5c0-0.2-0.1-0.4-0.2-0.6l-2.3-0.9c-0.2,0.1-0.4,0.2-0.5,0.3c-0.1,0.1-0.2,0.3-0.3,0.4
                        c-0.1,0.3-0.1,0.5,0.1,0.8c0.2,0.3,0.5,0.6,1.1,0.8c0.6,0.2,1,0.3,1.3,0.2C506.2,380.9,506.5,380.7,506.6,380.4z"/>
                </g>
                <g>
                    <path className="st23" d="M254.5,517.7l1.3-6.1l-2.1-0.4l0.3-1.4l5.9,1.3l-0.3,1.4l-2.1-0.4l-1.3,6.1L254.5,517.7z"/>
                    <path className="st23" d="M261.4,519.2c-0.4-0.1-0.7-0.2-1-0.4c-0.3-0.2-0.6-0.5-0.8-0.8c-0.2-0.3-0.4-0.7-0.4-1.1
                        c-0.1-0.4-0.1-0.8,0-1.3c0.1-0.5,0.2-0.9,0.5-1.2c0.2-0.3,0.5-0.6,0.8-0.8c0.3-0.2,0.6-0.3,1-0.4s0.7-0.1,1.1,0
                        c0.4,0.1,0.7,0.2,1,0.4c0.3,0.2,0.6,0.5,0.8,0.8c0.2,0.3,0.4,0.7,0.4,1.1c0.1,0.4,0.1,0.8,0,1.3c-0.1,0.5-0.2,0.9-0.5,1.2
                        c-0.2,0.3-0.5,0.6-0.8,0.8c-0.3,0.2-0.6,0.3-1,0.4C262.2,519.3,261.8,519.3,261.4,519.2z M261.7,517.9c0.3,0.1,0.6,0,0.9-0.3
                        c0.2-0.3,0.4-0.6,0.5-1.2c0.1-0.5,0.1-0.9,0-1.2c-0.1-0.3-0.4-0.5-0.7-0.6c-0.4-0.1-0.7,0-0.9,0.3c-0.2,0.3-0.4,0.6-0.5,1.2
                        c-0.1,0.5-0.1,0.9,0,1.2C261.1,517.6,261.3,517.8,261.7,517.9z"/>
                    <path className="st23" d="M268.6,520.4c-0.4-0.1-0.8-0.2-1.1-0.4s-0.6-0.4-0.8-0.7c-0.2-0.3-0.4-0.7-0.5-1.1c-0.1-0.4-0.1-0.8,0-1.3
                        c0.1-0.5,0.2-0.9,0.4-1.2c0.2-0.4,0.5-0.6,0.8-0.9c0.3-0.2,0.6-0.4,1-0.5s0.7-0.1,1.1-0.1c0.4,0.1,0.8,0.2,1.1,0.4s0.5,0.4,0.7,0.7
                        c0.2,0.3,0.3,0.6,0.3,1c0,0.4,0,0.7,0,1.1c0,0.2-0.1,0.3-0.1,0.4c0,0.1-0.1,0.2-0.1,0.3l-3.5-0.5c0,0.4,0.1,0.8,0.4,1
                        c0.2,0.2,0.6,0.4,0.9,0.5c0.4,0.1,0.9,0,1.3-0.2l0.4,1.1c-0.3,0.2-0.7,0.3-1.1,0.3C269.3,520.5,268.9,520.5,268.6,520.4z
                        M267.9,516.6l2.1,0.3c0.1-0.3,0-0.6-0.1-0.8c-0.1-0.2-0.4-0.4-0.7-0.4c-0.3,0-0.5,0-0.8,0.2C268.2,515.9,268,516.2,267.9,516.6z"
                        />
                    <path className="st23" d="M274.7,521.3c-0.4,0-0.7-0.1-0.9-0.3c-0.2-0.1-0.4-0.3-0.6-0.5c-0.1-0.2-0.2-0.5-0.3-0.8c0-0.3,0-0.6,0-0.9
                        l0.3-2.4l-0.8-0.1l0.2-1.3l0.9,0l0.4-1.5l1.4,0.2l-0.2,1.6l1.4,0.2l-0.2,1.4l-1.4-0.2l-0.3,2.3c0,0.3,0,0.6,0.1,0.7
                        c0.1,0.2,0.3,0.3,0.5,0.3c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0l0.1,1.3c-0.2,0-0.4,0.1-0.6,0.1C275.3,521.3,275,521.3,274.7,521.3z
                        "/>
                    <path className="st23" d="M279.1,521.8c-0.4,0-0.8-0.2-1.2-0.3c-0.4-0.2-0.7-0.4-1-0.7l0.9-1c0.2,0.2,0.5,0.4,0.7,0.5
                        c0.2,0.1,0.5,0.2,0.7,0.2c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.1-0.2-0.2-0.2
                        s-0.2-0.1-0.4-0.2c-0.1-0.1-0.3-0.1-0.4-0.2c-0.2-0.1-0.3-0.2-0.5-0.3c-0.2-0.1-0.3-0.2-0.5-0.4c-0.1-0.2-0.2-0.3-0.3-0.5
                        c-0.1-0.2-0.1-0.4-0.1-0.7c0-0.3,0.1-0.5,0.2-0.7c0.1-0.2,0.3-0.4,0.5-0.5c0.2-0.1,0.5-0.2,0.7-0.3s0.6-0.1,0.9,0
                        c0.4,0,0.8,0.2,1.2,0.4c0.3,0.2,0.6,0.4,0.8,0.6l-0.9,1c-0.2-0.2-0.4-0.3-0.6-0.4c-0.2-0.1-0.4-0.2-0.6-0.2c-0.4,0-0.7,0.1-0.7,0.4
                        c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.3,0.1,0.4,0.2c0.2,0.1,0.4,0.2,0.5,0.3
                        c0.2,0.1,0.3,0.2,0.5,0.4s0.2,0.3,0.3,0.5c0.1,0.2,0.1,0.4,0.1,0.7c0,0.3-0.1,0.5-0.2,0.7c-0.1,0.2-0.3,0.4-0.5,0.5
                        c-0.2,0.1-0.5,0.3-0.8,0.3C279.9,521.8,279.5,521.8,279.1,521.8z"/>
                    <path className="st23" d="M285.7,522.4c-0.4,0-0.7-0.1-1.1-0.3c-0.3-0.2-0.6-0.4-0.9-0.7c-0.2-0.3-0.4-0.6-0.6-1
                        c-0.1-0.4-0.2-0.8-0.1-1.3c0-0.5,0.1-0.9,0.3-1.3c0.2-0.4,0.4-0.7,0.7-0.9c0.3-0.2,0.6-0.4,1-0.5c0.4-0.1,0.7-0.2,1.1-0.1
                        c0.4,0,0.7,0.1,1.1,0.3c0.3,0.2,0.6,0.4,0.9,0.7c0.2,0.3,0.4,0.6,0.6,1c0.1,0.4,0.2,0.8,0.1,1.3c0,0.5-0.1,0.9-0.3,1.3
                        c-0.2,0.4-0.4,0.7-0.7,0.9c-0.3,0.2-0.6,0.4-1,0.5C286.4,522.4,286,522.4,285.7,522.4z M285.8,521c0.4,0,0.6-0.1,0.8-0.4
                        c0.2-0.3,0.3-0.7,0.4-1.2c0-0.5,0-0.9-0.2-1.2s-0.4-0.5-0.8-0.5c-0.4,0-0.6,0.1-0.8,0.4c-0.2,0.3-0.3,0.7-0.4,1.2
                        c0,0.5,0,0.9,0.2,1.2C285.2,520.8,285.4,520.9,285.8,521z"/>
                    <path className="st23" d="M290.3,522.5l0.3-5.9l1.4,0.1l0.1,1l0,0c0.2-0.4,0.5-0.7,0.8-0.9c0.3-0.2,0.6-0.3,0.9-0.2c0.2,0,0.3,0,0.4,0
                        c0.1,0,0.2,0.1,0.3,0.1l-0.4,1.5c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0c-0.2,0-0.5,0.1-0.7,0.2s-0.5,0.4-0.6,0.8l-0.2,3.4
                        L290.3,522.5z"/>
                    <path className="st23" d="M297.7,525.3c-0.3,0-0.7,0-1-0.1c-0.3-0.1-0.6-0.1-0.8-0.3c-0.2-0.1-0.4-0.3-0.5-0.5s-0.2-0.4-0.2-0.7
                        c0-0.5,0.3-0.9,0.8-1.2v0c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.2-0.6s0.3-0.4,0.5-0.5v0
                        c-0.2-0.1-0.4-0.3-0.5-0.6s-0.2-0.6-0.2-0.9c0-0.4,0.1-0.7,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.5-0.3,0.8-0.4
                        c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0,0.7,0,0.9,0.1l2.1,0l0,1.3l-0.9,0c0.1,0.1,0.1,0.2,0.1,0.3s0.1,0.3,0.1,0.4c0,0.3-0.1,0.6-0.2,0.9
                        c-0.1,0.2-0.3,0.5-0.5,0.6c-0.2,0.2-0.5,0.3-0.7,0.4c-0.3,0.1-0.6,0.1-0.9,0.1c-0.2,0-0.5,0-0.7-0.1c-0.1,0.1-0.1,0.1-0.2,0.2
                        c0,0.1,0,0.1,0,0.2c0,0.2,0.1,0.3,0.2,0.3c0.1,0.1,0.4,0.1,0.7,0.1l0.9,0c0.7,0,1.3,0.1,1.7,0.4c0.4,0.2,0.6,0.6,0.6,1.1
                        c0,0.3-0.1,0.6-0.2,0.8c-0.2,0.3-0.4,0.5-0.7,0.7c-0.3,0.2-0.6,0.3-1,0.4C298.7,525.3,298.2,525.3,297.7,525.3z M298,524.2
                        c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.4-0.3,0.4-0.5c0-0.2-0.1-0.3-0.2-0.4s-0.4-0.1-0.7-0.1l-0.6,0c-0.2,0-0.4,0-0.5,0
                        c-0.1,0-0.2,0-0.3-0.1c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.2,0.1,0.4,0.4,0.5C297.3,524.2,297.6,524.2,298,524.2z M297.8,519.9
                        c0.2,0,0.4-0.1,0.6-0.2c0.2-0.2,0.2-0.4,0.2-0.7c0-0.3-0.1-0.5-0.2-0.7c-0.2-0.2-0.3-0.2-0.6-0.2c-0.2,0-0.4,0.1-0.6,0.2
                        c-0.2,0.2-0.2,0.4-0.2,0.7c0,0.3,0.1,0.6,0.2,0.7C297.4,519.8,297.6,519.9,297.8,519.9z"/>
                    <path className="st23" d="M303.8,523c-0.3,0-0.5,0-0.7-0.1c-0.2-0.1-0.4-0.2-0.6-0.4s-0.3-0.3-0.4-0.6s-0.1-0.4-0.1-0.7
                        c0-0.6,0.2-1.1,0.8-1.5c0.5-0.4,1.4-0.6,2.5-0.7c0-0.3-0.1-0.5-0.2-0.6c-0.1-0.2-0.4-0.2-0.7-0.2c-0.3,0-0.5,0.1-0.8,0.2
                        c-0.2,0.1-0.5,0.2-0.8,0.4l-0.6-1.1c0.4-0.2,0.8-0.4,1.2-0.6c0.4-0.1,0.9-0.2,1.3-0.2c0.8,0,1.3,0.2,1.7,0.6c0.4,0.4,0.6,1.1,0.6,2
                        l0,3.4l-1.4,0l-0.1-0.6h0c-0.3,0.2-0.5,0.4-0.8,0.5C304.4,522.9,304.1,523,303.8,523z M304.4,521.6c0.2,0,0.4,0,0.5-0.1
                        c0.1-0.1,0.3-0.2,0.4-0.4l0-1c-0.6,0.1-1,0.2-1.3,0.4c-0.2,0.2-0.4,0.4-0.3,0.6c0,0.2,0.1,0.3,0.2,0.4
                        C304,521.6,304.2,521.6,304.4,521.6z"/>
                    <path className="st23" d="M309.1,522.8l-0.2-5.9l1.4-0.1l0.2,0.7l0,0c0.2-0.2,0.5-0.5,0.8-0.7c0.3-0.2,0.6-0.3,1-0.3
                        c0.6,0,1.1,0.2,1.4,0.6c0.3,0.4,0.5,1,0.5,1.7l0.2,3.6l-1.7,0.1l-0.1-3.4c0-0.4-0.1-0.7-0.2-0.9c-0.1-0.2-0.3-0.2-0.6-0.2
                        c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.3-0.5,0.4l0.2,4L309.1,522.8z"/>
                    <path className="st23" d="M316.8,515.6c-0.3,0-0.5,0-0.7-0.2c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.3,0.1-0.5,0.2-0.7c0.2-0.2,0.4-0.3,0.7-0.3
                        c0.3,0,0.5,0,0.7,0.2s0.3,0.4,0.3,0.6c0,0.3-0.1,0.5-0.2,0.7C317.3,515.5,317.1,515.6,316.8,515.6z M316.4,522.4l-0.4-5.9l1.7-0.1
                        l0.4,5.9L316.4,522.4z"/>
                    <path className="st23" d="M321.9,522.1c-0.4,0-0.8,0-1.2-0.1c-0.4-0.1-0.8-0.3-1.1-0.5l0.7-1.2c0.3,0.2,0.6,0.3,0.8,0.4
                        c0.3,0.1,0.5,0.1,0.8,0.1c0.3,0,0.4-0.1,0.6-0.2s0.2-0.2,0.1-0.4c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.2-0.1-0.3-0.2
                        c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.3-0.1-0.5-0.1c-0.2-0.1-0.4-0.1-0.6-0.2c-0.2-0.1-0.4-0.2-0.5-0.3c-0.2-0.1-0.3-0.3-0.4-0.5
                        s-0.2-0.4-0.2-0.6c0-0.3,0-0.5,0.1-0.8c0.1-0.2,0.2-0.4,0.4-0.6c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.1,0.6-0.2,0.9-0.2
                        c0.4,0,0.8,0,1.2,0.1c0.4,0.1,0.7,0.3,0.9,0.4l-0.7,1.1c-0.2-0.1-0.4-0.2-0.7-0.3s-0.4-0.1-0.6-0.1c-0.4,0-0.6,0.2-0.6,0.5
                        c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0.1,0.4,0.1s0.3,0.1,0.4,0.1c0.2,0.1,0.4,0.1,0.6,0.2
                        c0.2,0.1,0.4,0.2,0.5,0.3c0.2,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.2,0.4,0.2,0.7c0,0.3,0,0.5-0.1,0.8s-0.2,0.5-0.4,0.6
                        c-0.2,0.2-0.4,0.3-0.7,0.5C322.7,522,322.3,522.1,321.9,522.1z"/>
                    <path className="st23" d="M327.4,521.6c-0.3,0-0.5,0-0.7-0.1c-0.2-0.1-0.4-0.2-0.6-0.3c-0.2-0.1-0.3-0.3-0.4-0.5s-0.2-0.4-0.2-0.7
                        c-0.1-0.6,0.1-1.1,0.6-1.5c0.5-0.4,1.3-0.7,2.4-1c0-0.3-0.1-0.5-0.3-0.6s-0.4-0.2-0.7-0.1c-0.3,0-0.5,0.1-0.7,0.2s-0.5,0.3-0.7,0.5
                        l-0.8-1.1c0.3-0.3,0.7-0.5,1.1-0.7s0.8-0.3,1.3-0.4c0.8-0.1,1.4,0.1,1.8,0.4c0.4,0.4,0.7,1,0.8,1.9l0.4,3.3l-1.4,0.2l-0.2-0.6l0,0
                        c-0.2,0.2-0.5,0.5-0.7,0.6C328.1,521.4,327.8,521.5,327.4,521.6z M327.9,520.2c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.3-0.2,0.4-0.4
                        l-0.1-1c-0.6,0.2-1,0.3-1.2,0.5c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.2,0.1,0.3,0.2,0.4C327.5,520.2,327.7,520.2,327.9,520.2z"/>
                    <path className="st23" d="M334.8,520.6c-0.4,0.1-0.7,0-0.9,0c-0.3-0.1-0.5-0.2-0.7-0.4s-0.3-0.4-0.5-0.7c-0.1-0.3-0.2-0.6-0.2-0.9
                        l-0.3-2.4l-0.8,0.1l-0.2-1.3l0.9-0.2l0-1.6l1.4-0.2l0.2,1.5l1.4-0.2l0.2,1.3l-1.4,0.2l0.3,2.3c0,0.3,0.2,0.6,0.3,0.7
                        c0.2,0.1,0.4,0.2,0.6,0.1c0.1,0,0.2,0,0.3-0.1s0.2-0.1,0.3-0.1l0.5,1.2c-0.1,0.1-0.3,0.1-0.5,0.2
                        C335.3,520.5,335,520.6,334.8,520.6z"/>
                    <path className="st23" d="M337.3,513.3c-0.3,0-0.5,0-0.8-0.1c-0.2-0.1-0.3-0.3-0.4-0.6s0-0.5,0.2-0.7c0.2-0.2,0.4-0.3,0.7-0.4
                        c0.3,0,0.5,0,0.8,0.1c0.2,0.1,0.3,0.3,0.4,0.6c0,0.3,0,0.5-0.2,0.7S337.6,513.2,337.3,513.3z M337.5,520.1l-1-5.8l1.7-0.3l1,5.8
                        L337.5,520.1z"/>
                    <path className="st23" d="M343.9,519.1c-0.4,0.1-0.8,0.1-1.2,0c-0.4-0.1-0.7-0.2-1-0.4c-0.3-0.2-0.6-0.5-0.8-0.8
                        c-0.2-0.3-0.4-0.8-0.5-1.2c-0.1-0.5-0.1-0.9,0-1.3c0.1-0.4,0.2-0.8,0.4-1.1c0.2-0.3,0.5-0.6,0.8-0.8s0.6-0.3,1-0.4
                        c0.4-0.1,0.8-0.1,1.1,0c0.3,0.1,0.6,0.2,0.9,0.4c0.3,0.2,0.5,0.5,0.6,0.8c0.2,0.3,0.3,0.7,0.4,1.1c0,0.2,0,0.3,0.1,0.4
                        c0,0.1,0,0.3,0,0.3l-3.5,0.7c0.2,0.4,0.4,0.7,0.7,0.8c0.3,0.1,0.7,0.2,1,0.1c0.4-0.1,0.8-0.3,1.2-0.6l0.8,0.9
                        c-0.3,0.3-0.6,0.5-0.9,0.7C344.6,518.9,344.3,519,343.9,519.1z M342,515.7l2.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.8
                        c-0.2-0.2-0.5-0.2-0.8-0.2c-0.3,0.1-0.5,0.2-0.7,0.4C342,515,341.9,515.3,342,515.7z"/>
                </g>
                <g>
                    <path className="st23" d="M79.3,339.5l6.3-1.2l-0.4-2.1l1.5-0.3l1.1,6l-1.5,0.3L86,340l-6.3,1.2L79.3,339.5z"/>
                    <path className="st23" d="M80.7,346.6c-0.1-0.4-0.1-0.7,0-1.1c0.1-0.4,0.2-0.7,0.4-1c0.2-0.3,0.5-0.6,0.8-0.8c0.3-0.2,0.8-0.4,1.3-0.5
                        c0.5-0.1,0.9-0.1,1.4,0c0.4,0.1,0.8,0.2,1.1,0.4c0.3,0.2,0.6,0.5,0.8,0.8c0.2,0.3,0.4,0.7,0.4,1c0.1,0.4,0.1,0.7,0,1.1
                        c-0.1,0.4-0.2,0.7-0.4,1c-0.2,0.3-0.5,0.6-0.8,0.8s-0.8,0.4-1.3,0.5c-0.5,0.1-0.9,0.1-1.4,0c-0.4-0.1-0.8-0.2-1.1-0.4
                        c-0.3-0.2-0.6-0.5-0.8-0.8C80.9,347.3,80.7,347,80.7,346.6z M82.1,346.3c0.1,0.4,0.3,0.6,0.6,0.7c0.3,0.1,0.8,0.1,1.3,0
                        c0.5-0.1,0.9-0.3,1.2-0.5c0.3-0.2,0.4-0.5,0.3-0.9c-0.1-0.4-0.3-0.6-0.6-0.7c-0.3-0.1-0.8-0.1-1.3,0c-0.5,0.1-0.9,0.3-1.2,0.5
                        C82.1,345.7,82,346,82.1,346.3z"/>
                    <path className="st23" d="M82.3,353.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0.2-0.8,0.4-1.1c0.2-0.3,0.5-0.6,0.8-0.9
                        c0.3-0.2,0.8-0.4,1.2-0.5c0.5-0.1,0.9-0.1,1.3-0.1c0.4,0.1,0.8,0.2,1.1,0.4c0.3,0.2,0.6,0.4,0.8,0.7c0.2,0.3,0.4,0.6,0.5,1
                        c0.1,0.4,0.1,0.8,0.1,1.1c-0.1,0.3-0.2,0.7-0.4,0.9c-0.2,0.3-0.5,0.5-0.8,0.7s-0.7,0.3-1.1,0.4c-0.2,0-0.3,0.1-0.5,0.1
                        c-0.1,0-0.3,0-0.3,0l-0.9-3.5c-0.4,0.2-0.7,0.4-0.8,0.8c-0.1,0.3-0.1,0.7,0,1.1c0.1,0.4,0.3,0.8,0.7,1.2l-0.9,0.8
                        c-0.3-0.2-0.5-0.5-0.7-0.9C82.6,354.5,82.4,354.2,82.3,353.8z M85.7,351.6l0.5,2.1c0.3-0.1,0.6-0.2,0.7-0.4
                        c0.2-0.2,0.2-0.5,0.1-0.8c-0.1-0.3-0.2-0.5-0.5-0.7C86.4,351.6,86.1,351.5,85.7,351.6z"/>
                    <path className="st23" d="M84,359.9c-0.1-0.4-0.1-0.7-0.1-1s0.1-0.5,0.3-0.7c0.1-0.2,0.4-0.4,0.6-0.5c0.3-0.2,0.6-0.3,0.9-0.4l2.3-0.7
                        l-0.2-0.8l1.3-0.4l0.3,0.9l1.6-0.2l0.4,1.4l-1.5,0.4l0.4,1.4l-1.3,0.4l-0.4-1.4l-2.3,0.7c-0.3,0.1-0.5,0.2-0.6,0.4
                        c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.2,0.2l-1.2,0.6c-0.1-0.1-0.2-0.3-0.3-0.5
                        C84.2,360.5,84.1,360.2,84,359.9z"/>
                    <path className="st23" d="M85.3,364.3c-0.1-0.4-0.2-0.8-0.1-1.2c0-0.4,0.1-0.8,0.3-1.2l1.3,0.4c-0.1,0.3-0.2,0.6-0.2,0.9s0,0.5,0.1,0.8
                        c0.1,0.3,0.2,0.4,0.3,0.5c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.2,0.1-0.3s0-0.3,0.1-0.4c0-0.2,0-0.3,0-0.5
                        c0-0.2,0-0.4,0.1-0.6c0-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.2-0.4,0.4-0.5c0.2-0.1,0.3-0.3,0.6-0.3c0.3-0.1,0.5-0.1,0.8-0.1
                        c0.3,0,0.5,0.1,0.7,0.3c0.2,0.1,0.4,0.3,0.6,0.6c0.2,0.2,0.3,0.5,0.4,0.9c0.1,0.4,0.2,0.8,0.1,1.2c0,0.4-0.1,0.7-0.2,1l-1.3-0.5
                        c0.1-0.3,0.1-0.5,0.2-0.7c0-0.2,0-0.4-0.1-0.6c-0.1-0.4-0.3-0.6-0.7-0.5c-0.1,0-0.2,0.1-0.2,0.2s-0.1,0.2-0.1,0.3
                        c0,0.1,0,0.3,0,0.4c0,0.2,0,0.3,0,0.5c0,0.2,0,0.4-0.1,0.6c0,0.2-0.1,0.4-0.2,0.6c-0.1,0.2-0.2,0.4-0.4,0.5
                        c-0.2,0.2-0.4,0.3-0.6,0.3c-0.3,0.1-0.5,0.1-0.8,0.1c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.4-0.4-0.6-0.6
                        C85.5,365,85.4,364.7,85.3,364.3z"/>
                    <path className="st23" d="M87.5,371.3c-0.1-0.3-0.1-0.5-0.1-0.8c0-0.3,0.1-0.6,0.3-0.9l0,0l-0.7,0.1l-0.4-1.3l8-2.7l0.6,1.7l-2,0.7
                        l-0.9,0.2c0.3,0.2,0.5,0.3,0.7,0.6c0.2,0.2,0.3,0.5,0.4,0.7c0.1,0.3,0.2,0.7,0.1,1c0,0.3-0.2,0.6-0.3,0.9c-0.2,0.3-0.4,0.5-0.8,0.8
                        c-0.3,0.2-0.7,0.4-1.1,0.6c-0.5,0.2-0.9,0.2-1.4,0.2c-0.4,0-0.8-0.1-1.2-0.2c-0.3-0.1-0.6-0.3-0.9-0.6
                        C87.8,371.8,87.6,371.6,87.5,371.3z M88.8,370.4c0.1,0.3,0.3,0.5,0.6,0.6c0.3,0.1,0.8,0.1,1.4-0.1c1-0.3,1.4-0.9,1.2-1.5
                        c-0.1-0.3-0.4-0.6-0.8-0.8l-2.3,0.8c-0.1,0.2-0.1,0.4-0.1,0.6C88.7,370.1,88.7,370.3,88.8,370.4z"/>
                    <path className="st23" d="M89.9,377.9c-0.2-0.4-0.2-0.8-0.2-1.2c0-0.4,0.1-0.8,0.2-1.1c0.2-0.4,0.4-0.7,0.7-0.9
                        c0.3-0.3,0.7-0.5,1.2-0.7c0.5-0.2,0.9-0.2,1.3-0.2c0.4,0,0.8,0.1,1.2,0.2s0.6,0.4,0.9,0.6c0.3,0.3,0.4,0.6,0.6,0.9
                        c0.1,0.4,0.2,0.8,0.2,1.1c0,0.3-0.1,0.7-0.3,1c-0.2,0.3-0.4,0.5-0.7,0.8c-0.3,0.2-0.6,0.4-1,0.5c-0.2,0.1-0.3,0.1-0.4,0.1
                        c-0.1,0-0.2,0.1-0.3,0.1l-1.3-3.4c-0.4,0.2-0.6,0.5-0.7,0.8c-0.1,0.3-0.1,0.7,0.1,1.1c0.2,0.4,0.4,0.8,0.8,1.1l-0.8,0.9
                        c-0.3-0.2-0.6-0.5-0.8-0.8S90,378.2,89.9,377.9z M93,375.3l0.8,2c0.3-0.1,0.5-0.3,0.7-0.5s0.2-0.5,0-0.8c-0.1-0.3-0.3-0.5-0.5-0.6
                        C93.7,375.2,93.4,375.2,93,375.3z"/>
                    <path className="st23" d="M91.5,381.7l7.9-3.2l0.7,1.6l-4.5,1.8l0,0l2.9,0.9l0.7,1.8l-3.1-1l-2.4,3.4l-0.7-1.8l1.7-2.1l-1.1-0.4
                        l-1.4,0.6L91.5,381.7z"/>
                    <path className="st23" d="M94.7,389.5l4.8-3.9l0.7,1.6l-2.3,1.7c-0.3,0.2-0.5,0.3-0.7,0.5c-0.2,0.2-0.5,0.3-0.8,0.5l0,0
                        c0.3-0.1,0.6-0.2,0.9-0.2s0.6-0.1,0.9-0.2l2.8-0.6l0.6,1.4l-2.3,1.8c-0.2,0.2-0.5,0.4-0.7,0.5c-0.2,0.2-0.5,0.4-0.7,0.5l0,0
                        c0.3-0.1,0.6-0.2,0.9-0.2c0.3-0.1,0.6-0.2,0.9-0.2l2.8-0.6l0.7,1.5l-6.1,1.2l-0.9-1.9l2-1.5c0.2-0.2,0.5-0.3,0.7-0.5
                        c0.2-0.2,0.5-0.3,0.8-0.5l0,0c-0.3,0.1-0.6,0.2-0.9,0.2c-0.3,0.1-0.6,0.1-0.8,0.2l-2.4,0.5L94.7,389.5z"/>
                    <path className="st23" d="M99,398.9c-0.1-0.2-0.2-0.5-0.2-0.7c0-0.2,0-0.5,0.1-0.7c0.1-0.2,0.2-0.4,0.4-0.6s0.4-0.3,0.6-0.4
                        c0.6-0.3,1.1-0.3,1.7,0.1c0.6,0.3,1.2,1,1.8,2c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0-0.4-0.1-0.7c-0.1-0.2-0.3-0.4-0.5-0.6
                        s-0.4-0.4-0.7-0.6l0.8-1.1c0.4,0.2,0.7,0.5,1.1,0.8c0.3,0.3,0.6,0.7,0.8,1.1c0.3,0.7,0.4,1.3,0.2,1.9c-0.2,0.6-0.7,1-1.6,1.5
                        l-3.1,1.5l-0.6-1.3l0.5-0.4l0,0c-0.3-0.1-0.6-0.3-0.9-0.5C99.4,399.4,99.2,399.2,99,398.9z M100.5,398.8c0.1,0.2,0.2,0.3,0.4,0.4
                        c0.1,0.1,0.3,0.2,0.5,0.2l0.9-0.5c-0.4-0.5-0.7-0.9-0.9-1c-0.3-0.1-0.5-0.2-0.7-0.1c-0.2,0.1-0.3,0.2-0.3,0.4
                        C100.4,398.5,100.4,398.6,100.5,398.8z"/>
                    <path className="st23" d="M102.2,405c-0.1-0.2-0.2-0.5-0.2-0.7c0-0.2,0-0.5,0.1-0.7c0.1-0.2,0.2-0.4,0.3-0.6c0.2-0.2,0.3-0.3,0.6-0.5
                        c0.6-0.3,1.1-0.3,1.7,0c0.6,0.3,1.2,0.9,1.9,1.9c0.2-0.1,0.4-0.3,0.4-0.5c0.1-0.2,0-0.4-0.1-0.7c-0.1-0.2-0.3-0.4-0.5-0.6
                        s-0.5-0.4-0.7-0.5l0.7-1.1c0.4,0.2,0.7,0.5,1.1,0.8s0.6,0.7,0.8,1.1c0.4,0.7,0.5,1.3,0.3,1.9c-0.2,0.6-0.7,1.1-1.5,1.5l-3,1.6
                        l-0.7-1.3l0.5-0.4l0,0c-0.3-0.1-0.6-0.3-0.9-0.5C102.5,405.6,102.3,405.3,102.2,405z M103.7,404.9c0.1,0.2,0.2,0.3,0.4,0.4
                        c0.1,0.1,0.3,0.2,0.5,0.2l0.9-0.5c-0.4-0.5-0.7-0.8-1-1c-0.3-0.1-0.5-0.1-0.7,0c-0.2,0.1-0.3,0.2-0.3,0.4S103.6,404.7,103.7,404.9z
                        "/>
                    <path className="st23" d="M104.9,409.8l5.2-3.1l0.7,1.3l-0.6,0.5l0,0c0.3,0.1,0.7,0.2,1,0.4s0.6,0.4,0.8,0.7c0.2,0.4,0.3,0.7,0.3,1
                        c0,0.3-0.1,0.6-0.3,0.9c0.4,0.1,0.7,0.2,1,0.4s0.6,0.4,0.8,0.8c0.3,0.6,0.4,1.1,0.2,1.6s-0.7,0.9-1.3,1.3l-3.2,1.9l-0.9-1.5l3-1.8
                        c0.4-0.2,0.6-0.4,0.7-0.6s0.1-0.4-0.1-0.6c-0.2-0.3-0.5-0.5-1-0.6l-3.5,2.1l-0.9-1.5l3-1.8c0.4-0.2,0.6-0.4,0.7-0.6
                        c0.1-0.2,0.1-0.4-0.1-0.6c-0.2-0.3-0.5-0.5-1-0.6l-3.5,2.1L104.9,409.8z"/>
                    <path className="st23" d="M110.5,419.1l7.1-4.6l1,1.5l-1.8,1.1l-1,0.5c0.3,0.1,0.6,0.2,0.9,0.4c0.3,0.2,0.6,0.4,0.8,0.8
                        c0.4,0.5,0.4,1.1,0.2,1.5c-0.2,0.5-0.6,0.9-1.3,1.3l-3.1,2l-1-1.5l2.9-1.9c0.4-0.2,0.6-0.4,0.7-0.6c0.1-0.2,0-0.4-0.1-0.6
                        c-0.1-0.2-0.3-0.3-0.4-0.4c-0.2-0.1-0.4-0.2-0.7-0.2l-3.4,2.2L110.5,419.1z"/>
                    <path className="st23" d="M116,427.7c-0.2-0.4-0.4-0.7-0.5-1.1c-0.1-0.4-0.1-0.8,0-1.2c0.1-0.4,0.2-0.7,0.4-1.1c0.2-0.3,0.6-0.7,1-0.9
                        c0.4-0.3,0.8-0.5,1.2-0.5c0.4-0.1,0.8-0.1,1.2,0s0.7,0.2,1,0.4c0.3,0.2,0.6,0.4,0.8,0.7c0.2,0.4,0.4,0.7,0.5,1c0.1,0.3,0,0.7,0,1
                        c-0.1,0.3-0.3,0.6-0.5,0.9c-0.2,0.3-0.5,0.5-0.9,0.8c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0.1-0.2,0.1-0.3,0.1l-2-3
                        c-0.3,0.3-0.5,0.6-0.5,1c0,0.3,0.1,0.7,0.3,1c0.2,0.4,0.6,0.6,1.1,0.8l-0.5,1.1c-0.3-0.1-0.7-0.3-1-0.6
                        C116.4,428.2,116.2,428,116,427.7z M118.3,424.4l1.2,1.8c0.3-0.2,0.5-0.4,0.5-0.7c0.1-0.2,0-0.5-0.2-0.8c-0.2-0.2-0.4-0.4-0.7-0.5
                        C119,424.2,118.7,424.2,118.3,424.4z"/>
                    <path className="st23" d="M118.5,431l4.9-3.5l1,1.4l-4.9,3.5L118.5,431z M124.6,427.6c-0.2-0.2-0.3-0.5-0.2-0.8c0-0.3,0.2-0.5,0.4-0.6
                        c0.2-0.2,0.5-0.2,0.7-0.2c0.3,0.1,0.5,0.2,0.6,0.4c0.2,0.2,0.3,0.5,0.2,0.8c0,0.3-0.2,0.5-0.4,0.6c-0.2,0.2-0.5,0.2-0.7,0.2
                        S124.8,427.9,124.6,427.6z"/>
                    <path className="st23" d="M122,435.9c-0.2-0.3-0.4-0.6-0.4-0.9c-0.1-0.3-0.1-0.7,0-1c0.1-0.3,0.2-0.7,0.5-1c0.2-0.3,0.6-0.6,0.9-0.9
                        c0.4-0.3,0.8-0.5,1.2-0.6c0.4-0.1,0.8-0.2,1.1-0.2s0.7,0.1,1,0.3c0.3,0.2,0.5,0.4,0.7,0.6c0.2,0.3,0.3,0.5,0.4,0.8
                        c0,0.2,0.1,0.5,0,0.8l0.7-0.6l1.6-1.2l1.1,1.4l-6.7,5.2l-0.9-1.2l0.4-0.5l0,0c-0.3,0-0.6-0.1-0.9-0.3S122.1,436.2,122,435.9z
                        M123.4,435.4c0.1,0.2,0.3,0.3,0.4,0.3c0.2,0.1,0.4,0.1,0.6,0.1l2-1.5c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.1-0.3-0.2-0.4
                        c-0.2-0.2-0.4-0.3-0.8-0.3c-0.3,0-0.8,0.2-1.2,0.5c-0.5,0.4-0.8,0.7-0.9,1C123.1,434.8,123.2,435.1,123.4,435.4z"/>
                </g>
                <polygon className="st0" points="296.6,213.7 297.4,85.9 299.6,85.8 300,214.1 "/>
                <polygon className="st0" points="377.4,270.8 499,231.3 499.8,233.3 378.1,274.1 "/>
                <polygon className="st0" points="220,270.8 98.5,231.3 97.7,233.3 219.4,274.1 "/>
                <polygon className="st0" points="249.1,362.9 174.8,466.9 176.5,468.2 252,364.5 "/>
                <polygon className="st0" points="348,363.1 422.2,467.1 420.6,468.5 345,364.8 "/>
            </svg>
        </div>
        
    )
}

export default ToetsmodelComponent;
