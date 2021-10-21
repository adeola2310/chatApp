import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from "../Header/Header";
import Toast from "../Snackbar/Snackbar";


describe('Render components without crashing', () => {
    it('render header component without crashing', () => {
        render(
            <Header />
        )
    });
    it('render custom toast component without crashing', () => {
        render(
            <Toast />
        )
    });
});





