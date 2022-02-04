import React, { Component } from 'react';
import PropsTypes from 'prop-types';


class ListItem extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        const { desc, title } = this.props;
        if(!title) {
            return null;
        }
        return (
            <div data-test="listItemComponent">
                <h2 data-test="componentTitle">{title}</h2>
                <div data-test="componentDescription">
                    {desc}
                </div>
            </div>
        )
    }
}

ListItem.propTypes = {
    title: PropsTypes.string,
    desc: PropsTypes.string
}

export default ListItem