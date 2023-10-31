import { render, screen } from '@testing-library/react';
import { UserInfo } from './UserInfo';

describe('UserInfo', () => {
	it('should render', () => {
		render(<UserInfo />);
		const testUserInfo = screen.getByText('UserInfo Initiated!');
		expect(testUserInfo).toBeInTheDocument();
	});
});
