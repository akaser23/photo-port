import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal></Modal>);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal></Modal>);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText('Close this modal'));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
}) 