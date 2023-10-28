import { render, screen } from '@testing-library/react';
import { StepTitleInput } from './StepTitleInput';

describe('StepTitleInput', () => {
	it('should render', () => {
		render(<StepTitleInput />);
		const testStepTitleInput = screen.getByText('StepTitleInput Initiated!');
		expect(testStepTitleInput).toBeInTheDocument();
	});
});
