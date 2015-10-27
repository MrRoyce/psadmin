'use strict';

// Modules
const React  = require('react'),
      Router = require('react-router'),
      toastr = require('toastr');

// Function
const Link   = Router.Link;

// Files
const Utility       = require('./../common/utility.js'),
      AuthorActions = require('../../actions/authorActions');

class AuthorList extends React.Component{

    constructor () {
        super();
        Utility.bind(this, ['deleteAuthor']);
    }

    // Tell actions that an author was deleted
    deleteAuthor (id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
    }

    render () {

        var createAuthorRow = (author) => {
            return (
                <tr key={author.id}>
                    <td>
                        <a href="#" onClick={this.deleteAuthor.bind(this, author.id)} >Delete</a>
                    </td>
                    <td>
                        <Link to='manageAuthor' params={{id : author.id}}>{author.id}</Link>
                    </td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
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
