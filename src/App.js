import { Col, Divider, Row } from "antd";
import AppScreen from "./components/AppScreen/AppScreen";
import { SearchForm } from "./Forms/SearchForm";

import store from "./redux/store";
import { Provider } from "react-redux";
import UserCard from "./components/UserCard/UserCard";
import AppTabs from "./components/AppTabs/AppTabs";

export default function App() {
  return (
    <Provider store={store}>
      <AppScreen>
        <Row>
          <Col span={24}>
            <SearchForm />
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col span={24}>
            <UserCard />
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col span={24}>
            <AppTabs />
          </Col>
        </Row>
      </AppScreen>
    </Provider>
  );
}
