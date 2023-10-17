import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	it('should render', () => {
		render(<Sidebar />);
		const testSidebar = screen.getByText('Sidebar Initiated!');
		expect(testSidebar).toBeInTheDocument();
	});
});
