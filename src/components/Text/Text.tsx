import { FC } from 'react';
import { RegProps } from '../../app.interface.ts';
import style from './Text.module.scss'

const Text: FC<RegProps> = ({ title }) => <p className={style.contentText}>{title}</p>;

export default Text;
