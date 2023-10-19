import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
	it('should render', () => {
		render(<Icon />);
		const testIcon = screen.getByText('Icon Initiated!');
		expect(testIcon).toBeInTheDocument();
	});
});
