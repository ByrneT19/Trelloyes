import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
// import STORE from './store';

describe('List component', () => {
    it('it renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders the UI as expected', () => {
        const tree = renderer
            .create(<List 
                header={''}
                card={[]}
                />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})