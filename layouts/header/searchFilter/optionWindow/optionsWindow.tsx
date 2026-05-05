import styles from './optionsWindow.module.css';

import { DialingScreen } from '../../../../components/items/dialingScreen';
import { RadioButtons } from '../../../../components/radioButtons/radioButtons';

import Form from 'next/form'
import { useState } from 'react';

export const OptionsWindow = () => {
    const [ option, setOptione ] = useState({
        episode: true,
        castActors: false,
    });

    const section_one = [
        "episodes",
        "cast actors"
    ];

    return <div className={styles.container}>
        <section className={styles.option_container}>
            <section className={styles.side} />
            <section className={styles.middle}>
                <RadioButtons radio_array={section_one} />
                <DialingScreen />
                <Form action="GET" >
                    <fieldset>
                    <label>series</label>
                    <span>
                        <label>sg-1</label>
                        <input type="radio" ></input>
                    </span>
                    <span>
                        <label>atlantis</label>
                        <input type="radio" ></input>
                    </span>
                    <span>
                        <label>universe</label>
                        <input type="radio" ></input>
                    </span>
                    </fieldset>
                </Form>
            </section>
            <section className={styles.side} />
        </section>
        <section />
    </div>
}