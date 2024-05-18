import React from 'react';
import styles from './OrgDesc.module.css';
import Title from '../title/Title';
import Accordion from '../accordion/Accordion';

const OrgDesc = () => {
    return (
        <div className={styles.org} id='desc'>
            <Title title="Сведения об организации"></Title>
            <Accordion></Accordion>
        </div>
    )
}

export default OrgDesc;