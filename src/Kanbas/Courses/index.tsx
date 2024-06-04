import React from "react";
import db from "../../Kanbas/Database"
import { FaAlignJustify } from 'react-icons/fa'; 
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
export default function Courses({ Courses}; {courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name}  &gt; {pathname.split("/")[4]}
    </h2>
      <hr />
      <div className="d-flex">
    <div className="d-none d-md-block">
            <CoursesNavigation />
        </div>
        <div className="flex-fill">
            <Routes>
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:id" element={<AssignmentEditor />} />
            </Routes>
          </div>
          </div>
    </div>
  );
  export default Courses;
}


  

