import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import { requestRobots, setSearchField } from '../actions';

import './App.css';

const App = ({
    robots,
    searchField,
    isPending,
    onSearchChange,
    onRequestRobots
}) => {
    useEffect(() => {
       onRequestRobots();
    }, [onRequestRobots]);

    const filteredRobots = robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return isPending
        ? <h1>Loading</h1>
        : (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);