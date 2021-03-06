import * as React from 'React'
import styles  from '../../../pages/Homepage/homepagefirs.module.scss'
import { ICrownClothingProps } from '../../../webparts/crownClothing/components/ICrownClothingProps'
import MenuItem from '../menu-item.component';

export interface ICrownClothingState{
sections:any[]
}

class DirectoryMenu extends React.Component<ICrownClothingProps,ICrownClothingState>{
  state: { sections: ({ title: string; imageUrl: string; id: number; linkUrl: string; size?: undefined; } | { title: string; imageUrl: string; size: string; id: number; linkUrl: string; })[]; };
    constructor(props){
        super(props)
        this.state = {
            sections: [
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: ''
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: ''
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: ''
              }
            ]
          };
        }
       render(): React.ReactNode {
           return(
            <div className={styles.directorymenu}>
{this.state.sections.map(({title,imageUrl,size})=>{
    return(
<MenuItem  title={title} imageUrl={imageUrl} size={size}/>
    )
})}
            </div>
           )
       }
    }
    
    export default DirectoryMenu;