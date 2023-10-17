import { render, screen } from '@testing-library/react';
import { SidebarButton } from './SidebarButton';

describe('SidebarButton', () => {
	it('should render', () => {
		render(<SidebarButton />);
		const testSidebarButton = screen.getByText('SidebarButton Initiated!');
		expect(testSidebarButton).toBeInTheDocument();
	});
});
