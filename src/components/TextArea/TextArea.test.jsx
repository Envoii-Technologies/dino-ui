import { render, screen } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
	it('should render', () => {
		render(<TextArea />);
		const testTextArea = screen.getByText('TextArea Initiated!');
		expect(testTextArea).toBeInTheDocument();
	});
});
