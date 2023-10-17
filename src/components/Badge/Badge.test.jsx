import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
	it('should render', () => {
		render(<Badge />);
		const testBadge = screen.getByText('Badge Initiated!');
		expect(testBadge).toBeInTheDocument();
	});
});
