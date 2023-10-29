import { render, screen } from '@testing-library/react';
import { OverflowMenu } from './OverflowMenu';

describe('OverflowMenu', () => {
	it('should render', () => {
		render(<OverflowMenu />);
		const testOverflowMenu = screen.getByText('OverflowMenu Initiated!');
		expect(testOverflowMenu).toBeInTheDocument();
	});
});
