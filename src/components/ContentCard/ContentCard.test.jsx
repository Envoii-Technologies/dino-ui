import { render, screen } from '@testing-library/react';
import { ContentCard } from './ContentCard';

describe('ContentCard', () => {
	it('should render', () => {
		render(<ContentCard />);
		const testContentCard = screen.getByText('ContentCard Initiated!');
		expect(testContentCard).toBeInTheDocument();
	});
});
