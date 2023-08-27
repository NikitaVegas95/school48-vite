export interface UserSlicesState {
    email: null | string,
    token: null | string,
    id: null | string,
}
export interface UserSlicesAction {
    payload: any,
    type: string,
}