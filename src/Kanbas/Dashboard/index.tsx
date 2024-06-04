import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
{  
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState<any>({
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  //   image: "/images/reactjs.jpg", description: "New Description"
  // });
  // const addNewCourse = () => {
  //   const newCourse = { ...course,
  //                       _id: new Date().getTime().toString() };
  //   setCourses([...courses, { ...course, ...newCourse }]);
  // };
  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return(  
      <><div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h5>New Course<br />
      <input value={course.name} className="form-control mb-2"
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <textarea value={course.description} className="form-control"
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <hr />
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}> Add 
        </button>
        <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5>
      …

      <hr />
    </div><h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr /><div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                  <div className="card rounded-3 overflow-hidden">
                    <img src="/images/reactjs.jpg" height="{160}" />
                    <div className="card-body">
                      <span className="wd-dashboard-course-link"
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                        {course.name}
                      </span>
                      <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                        {course.description}
                      </p>
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                      <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
            <button id="wd-edit-course-click"
  onClick={(event) => {
    event.preventDefault();
    setCourse(course);
  }}
  className="btn btn-warning me-2 float-end" >
  Edit
</button>

                      <div />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card">
                  <img src="/images/puds.jpg" alt="stuff" />
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/1234/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      CS1234 React JS
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card">
                  <img src="/images/flip.jpg" alt="stuff" />
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/1234/Home"
                      style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}>
                      JRNL8230 Tell Good Stories
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Tell stories that are awesome
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card">
                  <img src="/images/kick.jpg" alt="stuff" />
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/1234/Home"
                      style={{ textDecoration: "none", color: "purple", fontWeight: "bold" }}>
                      LIFE1011 Don't Be An Idiot
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Don't be a big dummy and make good decisions
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card">
                  <img src="/images/monkey.jpg" alt="stuff" />
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/1234/Home"
                      style={{ textDecoration: "none", color: "green", fontWeight: "bold" }}>
                      FINS1023 The Art of Finesse
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      How to be a finesse gawd
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card">
                  <img src="/images/calisthenics.jpg" alt="stuff" />
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/1234/Home"
                      style={{ textDecoration: "none", color: "maroon", fontWeight: "bold" }}>
                      PHYS Calisthenics
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Get in better shape
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card">
                  <img src="/images/money.jpg" alt="stuff" />
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/1234/Home"
                      style={{ textDecoration: "none", color: "orange", fontWeight: "bold" }}>
                      MONY1234 Get Rich Quick
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Make money mad fast
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                  </div>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div></>
  );
}