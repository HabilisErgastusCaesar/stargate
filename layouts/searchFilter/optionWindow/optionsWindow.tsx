import styles from './optionsWindow.module.css';

import { OptionCheckBox } from '../../../components/input/optionCheckBox';

export const OptionsWindow = () => {
    return <div className={styles.container}>
        <section className={styles.option_container}>
            <section className={styles.side} />
            <section className={styles.middle}>
                <span>
                    <label>episodes</label>
                    <OptionCheckBox />
                </span>
                <span>
                    <label>cast actors</label>
                    <OptionCheckBox />
                </span>
            </section>
            <section className={styles.side} />
        </section>
        <section />
    </div>
}