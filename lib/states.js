import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

const employerIdState = atom({
  key: "emploterIdState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export { loginState, employerIdState };
