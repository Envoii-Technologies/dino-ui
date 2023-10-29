import { render, screen } from '@testing-library/react';
import { HelpIcon } from './HelpIcon';

describe('HelpIcon', () => {
	it('should render', () => {
		render(<HelpIcon />);
		const testHelpIcon = screen.getByText('HelpIcon Initiated!');
		expect(testHelpIcon).toBeInTheDocument();
	});
});
