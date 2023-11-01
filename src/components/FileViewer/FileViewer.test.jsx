import { render, screen } from '@testing-library/react';
import { FileViewer } from './FileViewer';

describe('FileViewer', () => {
	it('should render', () => {
		render(<FileViewer />);
		const testFileViewer = screen.getByText('FileViewer Initiated!');
		expect(testFileViewer).toBeInTheDocument();
	});
});
