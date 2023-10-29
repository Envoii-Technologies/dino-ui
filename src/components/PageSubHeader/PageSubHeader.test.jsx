import { render, screen } from '@testing-library/react';
import { PageSubHeader } from './PageSubHeader';

describe('PageSubHeader', () => {
	it('should render', () => {
		render(<PageSubHeader />);
		const testPageSubHeader = screen.getByText('PageSubHeader Initiated!');
		expect(testPageSubHeader).toBeInTheDocument();
	});
});
