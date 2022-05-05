import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const usePost = () => {
  const [postData, updatePostData] = useState({
    pending: false,
    data: undefined,
    error: undefined,
  });

  const execute = async ({ endpoint, postData }) => {
    updatePostData({
      pending: true,
      data: undefined,
      error: undefined,
    });

    return axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { ...postData })
      .then((response) => {
        updatePostData({
          pending: false,
          data: response,
          error: undefined,
        });
        toast.success("Success Notification");
      })
      .then((response) => {
        console.log(response);
        toast.error("ERROR Notification");
      });
  };

  return {
    execute,
    pending: postData.pending,
    data: postData.data,
    error: postData.error,
  };
};

export default usePost;
