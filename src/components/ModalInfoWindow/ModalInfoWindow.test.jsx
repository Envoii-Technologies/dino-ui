import { render, screen } from '@testing-library/react';
import { ModalInfoWindow } from './ModalInfoWindow';

describe('ModalInfoWindow', () => {
	it('should render', () => {
		render(<ModalInfoWindow />);
		const testModalInfoWindow = screen.getByText('ModalInfoWindow Initiated!');
		expect(testModalInfoWindow).toBeInTheDocument();
	});
});
