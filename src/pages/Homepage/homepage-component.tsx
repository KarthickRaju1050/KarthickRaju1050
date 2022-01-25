import * as React from 'react';
import DirectoryMenu from '../../components/menuitem/directorymenu/directory-meny.component';
import styles from '../../pages/Homepage/homepagefirs.module.scss';

export const Homepage = (props) => {
    return (
        <div className={styles.homepage}>
            <DirectoryMenu description="check"/>
        </div>

    )
}

