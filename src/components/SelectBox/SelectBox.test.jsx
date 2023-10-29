import { render, screen } from '@testing-library/react';
import { SelectBox } from './SelectBox';

describe('SelectBox', () => {
	it('should render', () => {
		render(<SelectBox />);
		const testSelectBox = screen.getByText('SelectBox Initiated!');
		expect(testSelectBox).toBeInTheDocument();
	});
});
