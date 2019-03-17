import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import notFoundPage from "../components/notFoundPage";
import Header from "../components/Header";
import helpPage from "../components/helpPage";
import addExpensePage from "../components/addExpensePage";
import editExpensePage from "../components/editExpensePage";
import expenseDashBoardPage from "../components/expenseDashBoardPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={expenseDashBoardPage} exact={true} />
        <Route path="/create" component={addExpensePage} exact={true} />
        <Route path="/edit/:id" component={editExpensePage} exact={true} />
        <Route path="/help" component={helpPage} exact={true} />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
