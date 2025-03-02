import { SiteConfig } from '../types';
import siteConfigJSON from './site.json';
import defaultConfigJSON from './default.json';

let config = {...siteConfigJSON} as unknown as SiteConfig;

// - 在开发环境下，使用默认配置覆盖站点配置，方便开发和测试
// - 在生产环境下，只使用站点特定的配置（ siteConfigJSON ）
// if (process.env.NODE_ENV === 'development') {
//     config = {
//         ...siteConfigJSON,
//         ...defaultConfigJSON
//     } 
// }

export const siteConfig: SiteConfig = config;
