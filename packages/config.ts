import { IConfig } from "./types"

/**
 * 获取默认配置
 * 使用函数是为了不污染默认配置
 */
export const getDefaultConfig = (): IConfig => ({
  hostUrl: ''
})