import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <Route path="/" exact component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
