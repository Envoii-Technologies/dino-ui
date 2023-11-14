import { render, screen } from '@testing-library/react';
import { ImageEditor } from './ImageEditor';

describe('ImageEditor', () => {
	it('should render', () => {
		render(<ImageEditor />);
		const testImageEditor = screen.getByText('ImageEditor Initiated!');
		expect(testImageEditor).toBeInTheDocument();
	});
});
