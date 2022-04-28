import CaseStudy from "case-study/CaseStudy";
import NewsFeed from "case-study/news-feed/NewsFeed";
import Todo from "case-study/todo/Todo";
import ComponentRelation from "hooks/component-relation/ComponentRelation";
import CustomHooks from "hooks/component-state/CustomHooks";
import ClassComponent from "lifecycle/ClassComponent";
import FunctionalComponent from "lifecycle/FunctionalComponent";
import Lifecycle from "lifecycle/Lifecycle";
import { Routes, Route } from "react-router-dom";
import ContextPage from "state-management/context/global-context/components/ContextPage";
import { MultipleContext } from "state-management/context/multiple-context/MultipleContext";
import SingleContext from "state-management/context/single-context/SingleContext";
import UserReducerPageWrapper from "state-management/context/use-reducer/UserReducerPageWrapper";
import StateManagementContext from "state-management/StateManagementContext";
import About from "views/About";
import Home from "views/Home";
import NotFound from "views/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/lifecycle" element={<Lifecycle />} />
      <Route path="/class" element={<ClassComponent />} />
      <Route path="/functional" element={<FunctionalComponent />} />

      <Route path="/custom-hooks" element={<CustomHooks />} />
      <Route path="/relation" element={<ComponentRelation />} />

      <Route path="/context" element={<StateManagementContext />} />
      <Route path="/single-context" element={<SingleContext />} />
      <Route path="/multiple-context" element={<MultipleContext />} />
      <Route path="/global" element={<ContextPage />} />
      <Route path="/global-reducer" element={<UserReducerPageWrapper />} />

      <Route path="/case-study" element={<CaseStudy />} />
      <Route path="/news-feed" element={<NewsFeed />} />
      <Route path="/todo" element={<Todo />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;

/**
 * rafc: Shortcut for create new React Arrow Function Component.
 */
