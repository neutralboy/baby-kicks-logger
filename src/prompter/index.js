import React, { useContext} from 'react';

import styles from './index.module.scss';

import {MainContext} from '../provider';

const Prompter = () => {
    const { state, dispatch } = useContext(MainContext);
    const changeFontSize = (to) => {
        let compute = state.fontSize;
        if(to === "incr"){ compute = state.fontSize+1; }
        else{ compute = state.fontSize-1; }
        dispatch({ type:"FONT_SIZE_CHANGE", payload: compute })
    }
    const ScrollTo = (e) => {
        switch (e.keyCode) {
            case 40:
                scroll('down');
            case 32:
                scroll('down');
            case 38:
                scroll('up');
            default:
                break;
        }
    }
    const scroll = (direction) =>{
        let positionTo = window.scrollY;
        if ( direction === "up" ){
            positionTo -= state.scrollIncrement; 
        }else{
            positionTo += state.scrollIncrement;
        }
        window.scrollTo(0, positionTo);
    }
    
    return (
        
<div onKeyDown={(event)=>ScrollTo(event)}>
        <nav className={`${styles.navbar} ${styles['is-fixed-top']} `} role="navigation" aria-label="main navigation">
            <div className={styles["navbar-brand"]}>
                <MainContext.Consumer>
                    {({dispatch}) => <a onClick={()=>dispatch({type:"SWITCH_MODE", payload:"t"})} className={`${styles["navbar-item"]} ${styles['has-text-grey']} `}>
                        GO BACK
                    </a>}
                </MainContext.Consumer>
            </div>
            <div className={styles['navbar-start']}>
                <div className={styles['navbar-item']}>
                    <span className={styles['has-text-grey']}>Mirror:</span>
                    <input value={ state.mirror ? "checked" : "" } onClick={()=>dispatch({ type: "MIRROR" })} type="checkbox" />
                </div>
            </div>
            <div className={styles['navbar-end']}>
                <div className={styles['navbar-item']}>
                    <span className={styles['has-text-grey']}>Font Size:</span>
                    <button onClick={()=>changeFontSize('incr')} style={{ fontSize: '1rem' }} className={` ${styles.button} ${styles['is-primary']} ${styles['is-small']} `}>+</button>
                    <button onClick={()=>changeFontSize('decr')} style={{ fontSize: '1rem' }} className={` ${styles.button} ${styles['is-primary']} ${styles['is-small']} `}>-</button>
                </div>
                <div className={styles['navbar-item']}>
                    <span className={styles['has-text-grey']}>Scroll:</span>
                    <button onClick={()=>scroll('up')} style={{ fontSize: '1rem' }} className={` ${styles.button} ${styles['is-primary']} ${styles['is-small']} `}>↑</button>
                    <button onClick={()=>scroll('down')} style={{ fontSize: '1rem' }} className={` ${styles.button} ${styles['is-primary']} ${styles['is-small']} `}>↓</button>
                </div>
            </div>
        </nav>
        <div style={{ marginTop: '3.2rem' }} className={styles['has-background-black']}>
            <MainContext.Consumer>
                {
                    ({state}) => <div className={` ${styles['container']} ${styles['has-text-white']}`} style={{ fontSize: `${state.fontSize}rem`, transform: `${state.mirror ? "scaleX(-1)" : '' }` }} >
                    {state.mainText.split ('\n').map(i=>
                            <p key={Math.random()}>{i}</p>
                        )}
                    </div> 
                }
            </MainContext.Consumer>
        </div>
</div>
    )
}

export default Prompter;