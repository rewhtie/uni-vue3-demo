import plugin from 'windicss/plugin'
import defaultConfig from './src/plugin/index'

const windPreset = plugin(({ addComponents, addUtilities }) => {
	addUtilities({
		'.click': {
			cursor: 'pointer',
			transition: 'filter 300ms',
			'&:active': {
				filter: 'brightness(1.1)'
			}
		}
	})

	addComponents({
		'.btn, .btn-info, .btn-primary': {
			paddingLeft: '16px',
			paddingRight: '16px',
			paddingTop: '7px',
			paddingBottom: '7px',
			transition: 'all 100ms',
			backgroundColor: '#fff',
			borderRadius: '6px',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: '#DEDEDE',
			cursor: 'pointer',
			userSelect: 'none',
			textAlign: 'center',
			fontSize: '16px',
			// '&.btn-primary:hover': {
			//   filter: 'brightness(1.1)'
			// },
			'&:active': {
				filter: 'brightness(0.9)'
			}
		},
		'.btn-info': {
			color: '#535353',
			borderColor: '#DEDEDE'
		},
		'.btn-primary': {
			color: '#fff',
			backgroundColor: '#FF5E2A'
		},
		'.btn-disabled': {
			opacity: '0.5',
			pointerEvents: 'none'
		}
	})
})

console.log(defaultConfig, '427426')

defaultConfig.plugins!.push(windPreset)

export default defaultConfig

