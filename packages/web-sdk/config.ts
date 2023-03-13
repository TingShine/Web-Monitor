import { getDefaultConfig } from "../config";
import { IWebConfig } from "./types";


export const getWebDefaultConfig = (): Partial<IWebConfig> => ({
  ...getDefaultConfig(),
  logInterceptor: true
})