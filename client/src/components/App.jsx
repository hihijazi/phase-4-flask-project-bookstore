import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={BookList} />
                <Route path="/books/:bookId" component={BookDetail} />
            </Switch>
        </Router>
    );
};

export default App;
