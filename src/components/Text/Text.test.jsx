import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
	it('should render', () => {
		render(<Text />);
		const testText = screen.getByText('Text Initiated!');
		expect(testText).toBeInTheDocument();
	});
});
