import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
	it('should render', () => {
		render(<Tag />);
		const testTag = screen.getByText('Tag Initiated!');
		expect(testTag).toBeInTheDocument();
	});
});
