import { render, screen } from '@testing-library/react';
import { StepContent } from './StepContent';

describe('StepContent', () => {
	it('should render', () => {
		render(<StepContent />);
		const testStepContent = screen.getByText('StepContent Initiated!');
		expect(testStepContent).toBeInTheDocument();
	});
});
