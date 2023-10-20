import { Card, Col, Row, Statistic } from "antd";
import { useSelector } from "react-redux";

export default function VideosList() {
  const userVideos = useSelector((state) => state.app.userVideos);
  return (
    userVideos && (
      <Card title="Videos">
        <Row gutter={[10, 10]}>
          {userVideos &&
            userVideos.aweme_list &&
            userVideos.aweme_list.map(
              (
                {
                  video: { cover },
                  statistics: {
                    aweme_id,
                    collect_count,
                    comment_count,
                    digg_count,
                    download_count,
                    forward_count,
                    lose_comment_count,
                    lose_count,
                    play_count,
                    share_count,
                    whatsapp_share_count,
                  },
                },
                index
              ) => {
                return (
                  <Col span={12}>
                    <Card>
                      <Row gutter={[10, 10]}>
                        <Col span={4}>
                          <img
                            src={cover && cover.url_list[0]}
                            alt={`vid-${index}`}
                            style={{ maxHeight: 100 }}
                          />
                        </Col>
                        <Col span={20}>
                          <Row>
                            <Col span={8}>
                              <Statistic
                                title={"Collects"}
                                value={collect_count}
                              />
                            </Col>
                            <Col span={8}>
                              <Statistic
                                title={"Comments"}
                                value={comment_count}
                              />
                            </Col>
                            <Col span={8}>
                              <Statistic title={"DIGGs"} value={digg_count} />
                            </Col>
                            <Col span={8}>
                              <Statistic title={"Shares"} value={share_count} />
                            </Col>
                            <Col span={8}>
                              <Statistic title={"Plays"} value={play_count} />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              }
            )}
        </Row>
      </Card>
    )
  );
}
