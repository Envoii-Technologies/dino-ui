import { render, screen } from '@testing-library/react';
import { IsoIcon } from './IsoIcon';

describe('IsoIcon', () => {
	it('should render', () => {
		render(<IsoIcon />);
		const testIsoIcon = screen.getByText('IsoIcon Initiated!');
		expect(testIsoIcon).toBeInTheDocument();
	});
});
