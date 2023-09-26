
export interface IFormInput {
  email: string;
  password: string;
}

export interface IFormInputReg {
  email: string;
  password: string;
  fullName: string
}

export interface IFormInputTask {
  title: string;
  text: string;
}

export interface IGetTasks {
  createdAt: string
  tags: string[]
  text: string
  title: string
  updatedAt: string
  user: null // должен быть объект юзера
  __v: number
  _id: string
}

export type IAuthToken = string | null

export type StrProps = string;
