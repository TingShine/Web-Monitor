import { IConfig } from "./types"

export const VERSION = '1.0.0'

/**
 * 获取默认配置
 * 使用函数是为了不污染默认配置
 */
export const getDefaultConfig = (): IConfig => ({
  hostUrl: ''
})