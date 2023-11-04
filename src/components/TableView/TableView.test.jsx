import { render, screen } from '@testing-library/react';
import { TableView } from './TableView';

describe('TableView', () => {
	it('should render', () => {
		render(<TableView />);
		const testTableView = screen.getByText('TableView Initiated!');
		expect(testTableView).toBeInTheDocument();
	});
});
