import React from "react";
import s from './ThisDay.module.scss'
import {GlobalSwgSelector} from "../../../../assets/icons/global/GlobalSwgSelector";

interface props {

}

export const ThisDay = (props: props) => {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                <div className={s.this__temp}>20°</div>
                <div className={s.this__day_name}>Сегодня</div>
                </div>
                <GlobalSwgSelector id='sun'/>
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>Время: <span>20:35</span></div>
                <div className={s.this__city}>Город: <span>Волгоград</span></div>
            </div>
        </div>
    )
}