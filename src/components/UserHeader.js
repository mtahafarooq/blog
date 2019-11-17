import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    renderUser (){
        const { user } = this.props;
        if (user)
            return <div className="header">{user.name}</div>
        else
            return null;
    }
    render(){
        return (
            this.renderUser()
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
}
export default connect(mapStateToProps, { })(UserHeader);