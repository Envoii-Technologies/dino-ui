import { render, screen } from '@testing-library/react';
import { MediaGallery } from './MediaGallery';

describe('MediaGallery', () => {
	it('should render', () => {
		render(<MediaGallery />);
		const testMediaGallery = screen.getByText('MediaGallery Initiated!');
		expect(testMediaGallery).toBeInTheDocument();
	});
});
