import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function AppTabs() {
  return (
    <Tabs type="card">
      <TabPane
        key="data-overview"
        tab="Data Overview"
        tabKey="data-overview"
      ></TabPane>
      <TabPane key="content" tab="Content" tabKey="content"></TabPane>
      <TabPane
        key="affiliated-influencers"
        tab="Affiliated Influencers"
        tabKey="affiliated-influencers"
      ></TabPane>
    </Tabs>
  );
}
