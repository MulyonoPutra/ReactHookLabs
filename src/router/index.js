import CaseStudy from "case-study/CaseStudy";
import ComponentRelation from "hooks/component-relation/ComponentRelation";
import CustomHooks from "hooks/component-state/CustomHooks";
import Lifecycle from "lifecycle/Lifecycle";
import { Routes, Route } from "react-router-dom";
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
      <Route path="/custom-hooks" element={<CustomHooks />} />
      <Route path="/case-study" element={<CaseStudy />} />
      <Route path="/relation" element={<ComponentRelation />} />
      <Route path="/context" element={<StateManagementContext />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
