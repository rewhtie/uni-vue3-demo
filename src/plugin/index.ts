import flexPlugin from './flex'
import lineClampPlugin from './lineClamp'
import type { FullConfig } from 'windicss/types/interfaces'

const defaultConfig: FullConfig = {
	preflight: false,
	prefix: 'w-',
	attributify: {
		prefix: '_'
	},
	plugins: [flexPlugin, lineClampPlugin]
}

export default defaultConfig
