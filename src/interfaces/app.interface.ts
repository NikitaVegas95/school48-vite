import { Dispatch } from 'react';

export interface IFormInput {
  email: any;
  password: string;
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

export interface UserSlicesState {
  email: null | string,
  token: null | string,
  id: null | string,
}
export interface UserSlicesAction {
  payload: any,
  type: string,
}

export interface UserState {
  user: any[],
  loading?: boolean,
  error: null | string,
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;