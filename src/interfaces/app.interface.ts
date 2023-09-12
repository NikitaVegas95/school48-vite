import { Dispatch } from 'react';

export interface IFormInput {
  email: string;
  pass: string;
}

export type RegProps = {
  title: string;
};

export interface ModalProps {
  setModalActive: Dispatch<boolean>;
  modalActive: boolean;
}

export interface WriteUser {
  (
   email: string,
   password: string):void
}