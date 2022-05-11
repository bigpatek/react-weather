import React from "react";
import s from './Header.module.scss'
import Select from 'react-select'
import {GlobalSwgSelector} from "../../assets/icons/global/GlobalSwgSelector";

interface props {

}

export const Header = (props: props) => {

    const options = [
        { value: 'city-1', label: 'Волгоград' },
        { value: 'city-1', label: 'Москва' },
        { value: 'city-1', label: 'Санкт-Петербург' }
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor : "rgba(71,147,255,0.2)",
            width : '194px',
            height : '37px',
            border : 'none',
            borderRadius: '10px',
            zIndex : '100',
            fontSize: '15px'
        })
    }

    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSwgSelector id="header-logo" /></div>
                <div className={s.title}>Weather</div>
            </div>
            <div className={s.wrapper}>
                 <div className={s.changeTheme}><GlobalSwgSelector id="change-theme"/></div>
                <div className={s.select}> <Select options={options} styles = {colourStyles} defaultValue={options[0]}/></div>
            </div>
        </div>
    )
}