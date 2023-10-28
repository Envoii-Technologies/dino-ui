import { render, screen } from '@testing-library/react';
import { FileUploader } from './FileUploader';

describe('FileUploader', () => {
	it('should render', () => {
		render(<FileUploader />);
		const testFileUploader = screen.getByText('FileUploader Initiated!');
		expect(testFileUploader).toBeInTheDocument();
	});
});
