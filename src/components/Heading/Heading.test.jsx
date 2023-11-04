import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading', () => {
	it('should render', () => {
		render(<Heading />);
		const testHeading = screen.getByText('Heading Initiated!');
		expect(testHeading).toBeInTheDocument();
	});
});
