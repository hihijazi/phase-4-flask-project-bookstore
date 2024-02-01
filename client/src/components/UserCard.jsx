import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div>
            <h2>User Information</h2>
            {user && (
                <div>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    {/*  */}
                </div>
            )}
        </div>
    );
};

export default UserCard;
