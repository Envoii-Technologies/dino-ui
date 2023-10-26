import { render, screen } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs', () => {
	it('should render', () => {
		render(<Tabs />);
		const testTabs = screen.getByText('Tabs Initiated!');
		expect(testTabs).toBeInTheDocument();
	});
});
