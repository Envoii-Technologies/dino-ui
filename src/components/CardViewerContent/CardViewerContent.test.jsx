import { render, screen } from '@testing-library/react';
import { CardViewerContent } from './CardViewerContent';

describe('CardViewerContent', () => {
	it('should render', () => {
		render(<CardViewerContent />);
		const testCardViewerContent = screen.getByText('CardViewerContent Initiated!');
		expect(testCardViewerContent).toBeInTheDocument();
	});
});
