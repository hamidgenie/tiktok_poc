import { Card, Col, Divider, Row } from "antd";
import { useSelector } from "react-redux";

export default function UserCard({ avatarUrl }) {
  const userInfo = useSelector((state) => state.app.userInfo);

  return (
    userInfo && (
      <Card>
        <Row gutter={[10, 10]}>
          <Col>
            <img src={userInfo.user.avatar_300x300.url_list[0]} alt="avatar" />
          </Col>
          <Col>
            <h2>{userInfo.user.nickname}</h2>
            <p>{userInfo.user.signature}</p>
            <h3>{userInfo.user.category}</h3>
            <Row>
              <Col>Videos: {userInfo.user.aweme_count}</Col>
              <Divider type="vertical" />
              <Col>Followers: {userInfo.user.follower_count}</Col>
            </Row>
          </Col>
        </Row>
      </Card>
    )
  );
}
