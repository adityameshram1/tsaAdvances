import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchPage from '../components/searchpage';
import ResultPage from '../components/resultpage';
// import LocationPage from '../components/locationpage';
// import StatisticsPage from '../components/statisticspage';
const  Main = () => (
    <main>

        <Switch>
            <Route exact
                path='/'
                component={SearchPage}
            />
            <Route
                path='/resultpage'
                component={ResultPage}
            />
            {/* <Route
                path='/statisticspage'
                component={StatisticsPage}
            />
            <Route
                path='/locationpage'
                component={LocationPage}
            /> */}
        </Switch>

    </main>
)

export default Main;