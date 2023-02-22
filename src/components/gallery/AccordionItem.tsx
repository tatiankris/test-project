import React, {useState} from 'react'
import s from './AccordionItem.module.scss'

type AccordionItemPropsType = {
    defaultChecked?: boolean
    inputValue: string
    inputId: string
    img: string
    eventName: string
    eventDate: string
    eventLink: string
}

function AccordionItem ({defaultChecked, inputValue, inputId, img,
                            eventDate, eventName, eventLink,...props}: AccordionItemPropsType) {

    const backgroundImg = {
        backgroundImage: `url(${img})`
    }

    return (
        <div className={s.accordionItem}>
            <input defaultChecked={!!defaultChecked} type={'radio'} className={s.accordionInput} name={'event'} value={inputValue} id={inputId}/>
            <label style={backgroundImg} htmlFor={inputId} className={s.accordionLabel}>
                    <h2 className={s.spanTitle}>{eventName}</h2>
                    <h3>{inputId}</h3>
            </label>
            <div style={backgroundImg} className={s.accordionContent}>
                <div className={s.contentInfo}>
                    <div className={s.eventNumber}>{inputId}</div>
                    <div className={s.eventInfo}>
                            <h2>{eventName}</h2>
                            <span>{eventDate}</span>
                            <a href={eventLink}>More information</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem