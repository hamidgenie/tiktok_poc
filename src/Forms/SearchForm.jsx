import { Button, Form, Input } from "antd";
import useApi from "../api/useApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setChallengeInfo,
  setChallenges,
  setUser,
  setVideos,
} from "../redux/appSlice";

export function SearchForm() {
  const { api } = useApi();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const onFinish = async ({ hashtag }) => {
    setLoading(true);
    try {
      const {
        data: { uid },
      } = await api.get(`/user/username/${hashtag}`, {
        params: {},
      });

      const { data: userInfo } = await api.get(`/user/${uid}`, {
        params: {},
      });

      const { data: userFollowers } = await api.get(`/user/${uid}/followers`, {
        params: {},
      });

      const { data: userVideos } = await api.get(`/post/user/${uid}/posts`, {
        params: {},
      });

      const {
        data: { challenge_list },
      } = await api.get("/search/hashtag", {
        params: { keyword: hashtag },
      });

      const hashtagInfo = challenge_list.find((challenge) => {
        return challenge?.challenge_info?.cha_name === hashtag;
      });

      const {
        data: { aweme_list },
      } = await api.get(`/hashtag/posts/${hashtagInfo.challenge_info.cid}`, {
        params: {},
      });

      dispatch(setUser(userInfo));
      dispatch(setChallenges(challenge_list));
      dispatch(setChallengeInfo(hashtagInfo));
      dispatch(setVideos(aweme_list));

      console.log({ userInfo, challenge_list, aweme_list });
    } catch (ex) {
      console.log({ ex });
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="search-form"
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="inline"
    >
      <Form.Item
        label="Hastag"
        name="hashtag"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled={loading} />
      </Form.Item>

      <Form.Item>
        <Button loading={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
