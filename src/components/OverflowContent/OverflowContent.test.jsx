import { render, screen } from '@testing-library/react';
import { OverflowContent } from './OverflowContent';

describe('OverflowContent', () => {
	it('should render', () => {
		render(<OverflowContent />);
		const testOverflowContent = screen.getByText('OverflowContent Initiated!');
		expect(testOverflowContent).toBeInTheDocument();
	});
});
