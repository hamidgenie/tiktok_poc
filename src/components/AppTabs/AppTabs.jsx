import { Col, Row, Tabs } from "antd";
import { useSelector } from "react-redux";
import VideosList from "../VideosList/VidoesList";

const { TabPane } = Tabs;

export default function AppTabs() {
  const userInfo = useSelector((state) => state.app.userInfo);

  return (
    userInfo && (
      <Tabs type="card">
        <TabPane
          key="data-overview"
          tab="Data Overview"
          tabKey="data-overview"
        ></TabPane>
        <TabPane
          key="content"
          tab={`Content(${userInfo.user.aweme_count})`}
          tabKey="content"
        >
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <VideosList />
            </Col>
          </Row>
        </TabPane>
        <TabPane
          key="affiliated-influencers"
          tab={`Affiliated Influencers (${userInfo.user.follower_count})`}
          tabKey="affiliated-influencers"
        ></TabPane>
      </Tabs>
    )
  );
}
