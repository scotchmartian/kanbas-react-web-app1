
import { Navigate, Route, Routes } from "react-router";
import CoursesNavigation from "./CoursesNavigation";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<h2>Home</h2>} />
              <Route path="Modules" element={<h2>Modules</h2>} />
              <Route path="Assignments" element={<h2>Assignments</h2>} />
              <Route path="Assignments/:id" element={<h2>Assignment Editor</h2>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}

  