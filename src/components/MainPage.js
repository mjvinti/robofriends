import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { isPending, onSearchChange, robots, searchField } = this.props;
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
}

export default MainPage;