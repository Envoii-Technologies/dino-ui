import { render, screen } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
	it('should render', () => {
		render(<Breadcrumb />);
		const testBreadcrumb = screen.getByText('Breadcrumb Initiated!');
		expect(testBreadcrumb).toBeInTheDocument();
	});
});
