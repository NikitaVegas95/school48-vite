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
  (userId: string,
   name: string,
   email: string,
   password: string):void
}