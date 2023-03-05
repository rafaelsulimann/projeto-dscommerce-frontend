import { createContext } from "react";
import { AccessPayloadTokenDTO } from "../models/auth";

export type ContextTokenType = {
    contextToken : AccessPayloadTokenDTO | undefined;
    setContextToken : (contextToken: AccessPayloadTokenDTO | undefined) => void;
}

export const ContextToken = createContext<ContextTokenType>({
    contextToken: undefined,
    setContextToken : () => {}
})