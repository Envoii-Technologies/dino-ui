import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
	it('should render', () => {
		render(<ProgressBar />);
		const testProgressBar = screen.getByText('ProgressBar Initiated!');
		expect(testProgressBar).toBeInTheDocument();
	});
});
