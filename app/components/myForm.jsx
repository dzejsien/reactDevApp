import React from 'react';
import ReactDOM from 'react-dom';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';

const MyForm = module.exports = React.createClass({

    mixins: [FRC.ParentContextMixin],

    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        return (
            <Formsy.Form
                className={this.getLayoutClassName()}
                {...this.props}
                ref="formsy"
            >
                {this.props.children}
            </Formsy.Form>
        );
    }
});
