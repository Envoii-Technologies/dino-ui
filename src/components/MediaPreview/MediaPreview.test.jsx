import { render, screen } from '@testing-library/react';
import { MediaPreview } from './MediaPreview';

describe('MediaPreview', () => {
	it('should render', () => {
		render(<MediaPreview />);
		const testMediaPreview = screen.getByText('MediaPreview Initiated!');
		expect(testMediaPreview).toBeInTheDocument();
	});
});
