import { render, screen } from '@testing-library/react';
import { ModalContentWindow } from './ModalContentWindow';

describe('ModalWindow', () => {
	it('should render', () => {
		render(<ModalContentWindow />);
		const testModalWindow = screen.getByText('ModalWindow Initiated!');
		expect(testModalWindow).toBeInTheDocument();
	});
});
