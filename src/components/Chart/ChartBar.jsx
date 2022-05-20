import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './ChartBar.css'
class ChartBar extends Component {
	constructor() {
		super()
        const  barFillheight = '0%'
	}
	render() {
		

		if (this.props.maxValue > 0) {
			this.barFillheight =
				Math.round((this.props.value / this.props.maxValue) * 100) + '%'
		}
		return (
			<div className='chart-bar'>
				
				<div className='chart-bar__inner'>
					<div
						className='chart-bar__fill'
						style={{ height: this.barFillheight }}
					></div>
				</div>
				<div className='chart-bar__label'>{this.props.label}</div>
			</div>
		)
	}
}

export default ChartBar
