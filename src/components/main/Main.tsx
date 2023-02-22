import React from 'react'
import s from './Main.module.scss'
import Time from "./Time";
import arrow from '../../assets/arrow.svg'

function Main() {

    return (
        <main className={s.main}>
            <div className={s.first}>
                <div className={s.title}>Under Construction</div>
                <p className={s.improveInfo}>We're making lots of improvements and will be back soon</p>
            </div>
            <div className={s.second}>
                <Time />
            </div>
            <div className={s.third}>
                <p className={s.eventPageCheck}>Check our event page when you wait:</p>
                <a href={'https://egorovagency.by'} className={s.goToButton}>Go to the event
                    <img className={s.arrow} src={arrow} />
                </a>
            </div>
        </main>
    )
}

export default Main
