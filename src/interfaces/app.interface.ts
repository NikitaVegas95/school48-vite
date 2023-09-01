import { Dispatch } from 'react';

export interface IFormInput {
  email: string;
  pass: string;
  // name: string;
}

export type RegProps = {
  title: string;
};

export interface ModalProps {
  setModalActive: Dispatch<boolean>;
  modalActive: boolean;
}
