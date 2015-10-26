'use strict';

// Modules
const React = require('react');

// Files
//const Utility = require('./../common/utility.js');

class AuthorList extends React.Component{

    constructor () {
        super();
        //Utility.bind(this, ['componentWillMount']);
    }

    render () {

        var createAuthorRow = (author) => {
            return (
                <tr key={author.id}>
                    <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

AuthorList.propTypes = {
    authors : React.PropTypes.array.isRequired
};

module.exports = AuthorList;
