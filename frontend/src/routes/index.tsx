import { Route, Switch } from 'react-router-dom';
import { AddDeveloper } from '../pages/AddDeveloper';
import { Dashboard } from '../pages/Dashboard';
import { EditDeveloper } from '../pages/EditDeveloper';
import { ShowDeveloper } from '../pages/ShowDeveloper';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/add" component={AddDeveloper} />
    <Route path="/edit/:uuid" component={EditDeveloper} />
    <Route path="/show/:uuid" component={ShowDeveloper} />
  </Switch>
);

export default Routes;
