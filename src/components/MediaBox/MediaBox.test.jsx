import { render, screen } from '@testing-library/react';
import { MediaBox } from './MediaBox';

describe('MediaBox', () => {
	it('should render', () => {
		render(<MediaBox />);
		const testMediaBox = screen.getByText('MediaBox Initiated!');
		expect(testMediaBox).toBeInTheDocument();
	});
});
