import React from 'react';
import './main.global.css';
import { Layout } from './Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { PostsContextProvider } from './context/postsContext';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <PostsContextProvider>
          <Content>
            <CardsList />
          </Content>
        </PostsContextProvider>
      </Layout>
    </Provider>
  );
}

export default AppComponent;
