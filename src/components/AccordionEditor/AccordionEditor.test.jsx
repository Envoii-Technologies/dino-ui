import { render, screen } from '@testing-library/react';
import { AccordionEditor } from './AccordionEditor';

describe('AccordionEditor', () => {
	it('should render', () => {
		render(<AccordionEditor />);
		const testAccordionEditor = screen.getByText('AccordionEditor Initiated!');
		expect(testAccordionEditor).toBeInTheDocument();
	});
});
