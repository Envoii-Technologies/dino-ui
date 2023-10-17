import { render, screen } from '@testing-library/react';
import { SidebarInfoBox } from './SidebarInfoBox';

describe('SidebarInfoBox', () => {
	it('should render', () => {
		render(<SidebarInfoBox />);
		const testSidebarInfoBox = screen.getByText('SidebarInfoBox Initiated!');
		expect(testSidebarInfoBox).toBeInTheDocument();
	});
});
