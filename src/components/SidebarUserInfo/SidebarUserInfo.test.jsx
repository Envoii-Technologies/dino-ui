import { render, screen } from '@testing-library/react';
import { SidebarUserInfo } from './SidebarUserInfo';

describe('SidebarUserInfo', () => {
	it('should render', () => {
		render(<SidebarUserInfo />);
		const testSidebarUserInfo = screen.getByText('SidebarUserInfo Initiated!');
		expect(testSidebarUserInfo).toBeInTheDocument();
	});
});
