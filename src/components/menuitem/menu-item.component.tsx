import * as React from 'react';
import styles from '../../pages/Homepage/homepagefirs.module.scss';

const MenuItem =({title,imageUrl,size})=>{
   
    return(
        <div style={{
            backgroundImage:`url(${imageUrl})`
        }}
        className={ `${size} ${styles.menuitem}`}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{title}</h1>
                            <span className={styles.subtitle}>
                                shopnow
                            </span>
    
                        </div>
                    </div>
        )
}

export default MenuItem;