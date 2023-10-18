import { render, screen } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
	it('should render', () => {
		render(<ButtonGroup />);
		const testButtonGroup = screen.getByText('ButtonGroup Initiated!');
		expect(testButtonGroup).toBeInTheDocument();
	});
});
