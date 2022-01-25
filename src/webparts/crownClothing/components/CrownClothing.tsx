import * as React from 'react';
import styles from './CrownClothing.module.scss';
import { ICrownClothingProps } from './ICrownClothingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Homepage } from '../../../pages/Homepage/homepage-component';



export default class CrownClothing extends React.Component<ICrownClothingProps, {}> {
  public render(): React.ReactElement<ICrownClothingProps> {
    return (
      <Homepage />
    );
  }
}
