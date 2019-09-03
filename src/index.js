/*
Requirements
    • We will be building a Tabs UI, similar to Bootstrap Tabs

    • There should be 3 tabs, associated with vote_average returned by the API. (Low, Average, High)
    • Theses tabs should contain the movies with these vote ranges (Low: <= 6.0, Average: 6.0 > 7.9, High: >= 8)
    • Clicking on each of the tabs will display a list of movies associated with that vote range
        ○ e.g. clicking on Low will only show movies with an average rating of 6.0 or lower.
    • The list should display the movie's id, vote_average, and release_date date properties
    • The list of movies should be sorted by most-recent release_date date first
    • At any given point, the UI should display which tab is active
    • When loading the UI for the first time, the first tab should be active
*/

import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";

import * as actions from "./Shared/action";
import * as reducer from "./Shared/reducer";

import PurchaseSummaryContainer from "./Containers/PurchaseSummaryContainer.react";

import "./styles.css";

const middlewares = [];

const store = createStore(
  reducer.appCombReducers,
  applyMiddleware(...middlewares)
);

const props = {
  qty: 1,
  sutotal: 102.96,
  pickupSavings: 3.85,
  taxesFees: 8.92,
  priceDetails: 99.11
};

function App() {
  return (
    <div className="App">
      <div className='App__title'>Puchase summary</div>
      <PurchaseSummaryContainer {...props} />
    </div>
  );
}

const user = { id: 0, promoCode: "DISCOUNT" };
store.dispatch(actions.UPDATED_USER_DATA(user));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
