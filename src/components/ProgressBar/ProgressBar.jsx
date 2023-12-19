import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.scss'

export const ProgressBar = ({ className, fluid, progress, showLabel, labelPosition, error, success, ...props }) =>
{
	const [internalProgress, setInternalProgress] = React.useState(progress);

  useEffect(() => {
    // Ensure progress is between 0 and 100
    const clampedProgress = Math.min(100, Math.max(0, progress));
    setInternalProgress(clampedProgress);
  }, [progress]);

	return (
		<div className={`ProgressBar
			${className || ''} 
			label-${labelPosition}
			${ fluid ? 'fluid' : ''}
			`}
			{...props}
		>
			<div className="ProgressBar__wrapper">
				<div className={`ProgressBar__wrapper__indicator ${error ? 'error' : ''} ${success ? 'success' : ''}`} style={{ width: `${internalProgress}%`}}></div>
			</div>
			{
				showLabel && <div className={`
					ProgressBar__label ${labelPosition}
				`} 
				style={{left: (labelPosition === "floating-top" || labelPosition === "floating-bottom") ? internalProgress + "%" : 0}}
				>{internalProgress}%</div>
			}
		</div>
	)
}

ProgressBar.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	/**
	 * Is ProgressBar fluid?
	 */
	fluid: PropTypes.bool,
	/**
	 * Current progress of progress bar
	 */
	progress: PropTypes.number,
	/**
	 * Is label visible?
	 */
	showLabel: PropTypes.bool,
	/**
	 * Position of label.
	 */
	labelPosition: PropTypes.oneOf(["right", "bottom", "floating-top", "floating-bottom"])
};

ProgressBar.defaultProps =
{
	className: undefined,
	fluid: false,
	progress: 0,
	showLabel: false,
	labelPosition: "right"
};
