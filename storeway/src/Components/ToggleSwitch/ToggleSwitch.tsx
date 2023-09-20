import { useState } from 'react'
import './ToggleSwitch.css'

interface ToggleSwitchProps {
	onChange: (isChecked: boolean) => void
	defaultChecked?: boolean
}

const ToggleSwitch = ({
	onChange,
	defaultChecked = true,
}: ToggleSwitchProps) => {
	const [isChecked, setIsChecked] = useState(defaultChecked)

	const handleToggle = () => {
		const newCheckedState = !isChecked
		setIsChecked(newCheckedState)
		onChange(newCheckedState)
	}

	return (
		<div className={`toggle-switch ${isChecked ? 'checked' : ''}`}>
			<div className="toggle-switch-bottom" onClick={handleToggle}></div>
		</div>
	)
}

export default ToggleSwitch
