import { render, screen } from '@testing-library/react';
import { LockView } from './LockView';

describe('LockView', () => {
	it('should render', () => {
		render(<LockView />);
		const testLockView = screen.getByText('LockView Initiated!');
		expect(testLockView).toBeInTheDocument();
	});
});
