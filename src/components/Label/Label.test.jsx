import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
	it('should render', () => {
		render(<Label />);
		const testLabel = screen.getByText('Label Initiated!');
		expect(testLabel).toBeInTheDocument();
	});
});
