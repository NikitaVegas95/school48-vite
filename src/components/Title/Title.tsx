import  { FC } from 'react';
import { RegProps } from '../../app.interface.ts';
import style from './Title.module.scss'

const Title: FC<RegProps> = ({ title }) => <h2 className={style.contentTitle}>{title}</h2>;

export default Title;
