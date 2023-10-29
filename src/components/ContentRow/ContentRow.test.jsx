import { render, screen } from '@testing-library/react';
import { ContentRow } from './ContentRow';

describe('ContentRow', () => {
	it('should render', () => {
		render(<ContentRow />);
		const testContentRow = screen.getByText('ContentRow Initiated!');
		expect(testContentRow).toBeInTheDocument();
	});
});
