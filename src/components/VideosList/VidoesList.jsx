import { Row } from "antd";
import { useSelector } from "react-redux";

export default function VideosList() {
  const userInfo = useSelector((state) => state.app.userInfo);
  return (
    userInfo && (
      <>
        <Row></Row>
      </>
    )
  );
}
