import { atom } from "recoil";

export const authState = atom({
    key: "auth",
    default: false
})

export const employerState = atom({
    key: "employer",
    default: null
})