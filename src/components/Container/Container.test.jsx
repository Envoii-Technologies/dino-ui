import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
	it('should render', () => {
		render(<Container />);
		const testContainer = screen.getByText('Container Initiated!');
		expect(testContainer).toBeInTheDocument();
	});
});
