import React from 'react';

import {MainContext} from '../provider';
import styles from './index.module.scss';

const Text = () => {
    return(
        <>
            <section className={styles.section}>
                <div className={styles.container}>

                    <div className={styles['has-text-centered']}>
                        <h1 className={`${styles['is-size-1']} ${styles['has-text-black']} `}>Web Teleprompter</h1>
                    </div>
<br/><br/>
                    <div>
                        <div className={styles.field}>
                            <label for="text" className={styles.label}>Enter your text here</label>
                            <div className={styles.control}>
                                <MainContext.Consumer>
                                    {
                                        ({ state, dispatch }) => <textarea value={state.mainText} placeholder="Paste your script here" onChange={(event)=>dispatch({type:"SET_TEXT", payload:event.target.value})} id="text" className={` ${styles.textarea} ${styles['is-fullwidth']} `} />
                                    }
                                    
                                </MainContext.Consumer>
                            </div>
                        </div>
                        <br/><br/>
                        <div>
                            <MainContext.Consumer>
                            { ({ state, dispatch }) => 
                                <button onClick={()=>dispatch({type:"SWITCH_MODE", payload:"p"})} className={` ${styles.button} ${styles['is-success']} ${styles['is-large']} ${styles['is-fullwidth']} `} >Start</button>
                            }
                            </MainContext.Consumer>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Text;