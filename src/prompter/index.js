import React from 'react';

import styles from './index.module.scss';

import {MainContext} from '../provider';

const Prompter = () => {
    return (
        <div className={styles['has-background-black']}>

        <nav className={styles.navbar} role="navigation" aria-label="main navigation">
            <div className={styles["navbar-brand"]}>
                <MainContext.Consumer>
                    {({state, dispatch}) => <a onClick={()=>dispatch({type:"SWITCH_MODE", payload:"t"})} className={styles["navbar-item"]}>
                        WEB TELEPROMPTER
                    </a>}
                </MainContext.Consumer>
            </div>
        </nav>
      
      

            <MainContext.Consumer>
                {
                    ({state}) => <div className={` ${styles['content']} `}>
                    <h1 className={styles['has-text-white']}>{state.mainText}</h1></div> 
                }
            </MainContext.Consumer>
        </div>
    )
}

export default Prompter;