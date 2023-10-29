import { render, screen } from '@testing-library/react';
import { MobilePageHeader } from './MobilePageHeader';

describe('MobilePageHeader', () => {
	it('should render', () => {
		render(<MobilePageHeader />);
		const testMobilePageHeader = screen.getByText('MobilePageHeader Initiated!');
		expect(testMobilePageHeader).toBeInTheDocument();
	});
});
