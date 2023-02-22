import React from 'react'
import s from './Gallery.module.scss'
import AccordionItem from "./AccordionItem";
import hawaiianParty from '../../assets/events-photos/hawaiianParty.png'

function Gallery() {

    return (
        <div id={'events'} className={s.galleryContainer}>
            <div className={s.title}>All Events</div>
            <div className={s.accordion}>
                <AccordionItem defaultChecked inputValue={'first'} inputId={'01'} img={hawaiianParty} eventName={'Hawaiian party'} eventDate={'13.02.2023'} eventLink={'https://egorovagency.by'} />
                <AccordionItem inputValue={'second'} inputId={'02'} img={hawaiianParty} eventName={'Мafia party'} eventDate={'13.02.2023'} eventLink={'https://egorovagency.by'} />
                <AccordionItem inputValue={'third'} inputId={'03'} img={hawaiianParty} eventName={'Party'} eventDate={'13.02.2023'} eventLink={'https://egorovagency.by'}/>
                <AccordionItem inputValue={'fourth'} inputId={'04'} img={hawaiianParty} eventName={'Party on the beach'} eventDate={'13.02.2023'} eventLink={'https://egorovagency.by'}/>
                <AccordionItem inputValue={'fifth'} inputId={'05'} img={hawaiianParty} eventName={'Home Security'} eventDate={'13.02.2023'} eventLink={'https://egorovagency.by'} />
                <AccordionItem inputValue={'sixth'} inputId={'06'} img={hawaiianParty} eventName={'Network Design & Implementation'} eventDate={'13.02.2023'} eventLink={'https://egorovagency.by'}/>
                <AccordionItem inputValue={'seventh'} inputId={'07'} img={hawaiianParty} eventName={'System Design & Engineering'} eventDate={'13.02.2023'} eventLink={'https://egorovagency.by'}/>
                <AccordionItem inputValue={'eights'} inputId={'08'} img={hawaiianParty} eventName={'Client Care Plans'} eventDate={'13.02.2023'} eventLink={'https://egorovagency.by'}/>
            </div>
        </div>
    )

}

export default Gallery
