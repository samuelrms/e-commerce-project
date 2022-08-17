import { Dispatch, SetStateAction } from "react";

export type TResponseUsePersistedState<T> = [T, Dispatch<SetStateAction<T>>];
