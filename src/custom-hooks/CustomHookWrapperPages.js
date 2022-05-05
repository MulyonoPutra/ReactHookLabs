import GetRequest from "./components/GetRequest";
import PostRequest from "./components/PostRequest";

const CustomHookWrapperPages = () => {
  return (
    <div>
      <div className="container">
        <h1>
          <strong>Custom Hook</strong>
        </h1>
        <div className="row">
          <div className="col">
            {" "}
            <GetRequest />
          </div>
          <div className="col">
            <PostRequest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHookWrapperPages;
