import { render, screen } from '@testing-library/react';
import { TextEditor } from './TextEditor';

describe('TextEditor', () => {
	it('should render', () => {
		render(<TextEditor />);
		const testTextEditor = screen.getByText('TextEditor Initiated!');
		expect(testTextEditor).toBeInTheDocument();
	});
});
