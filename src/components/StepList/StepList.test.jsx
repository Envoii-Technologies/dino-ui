import { render, screen } from '@testing-library/react';
import { StepList } from './StepList';

describe('StepList', () => {
	it('should render', () => {
		render(<StepList />);
		const testStepList = screen.getByText('StepList Initiated!');
		expect(testStepList).toBeInTheDocument();
	});
});
