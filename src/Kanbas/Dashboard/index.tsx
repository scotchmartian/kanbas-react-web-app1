import { Link } from "react-router-dom";
import db from "../Database";
export default function Dashboard() {
  const courses = db.courses;
    return (
      <><div id="wd-dashboard">
      </div><h1 id="wd-dashboard-title">Dashboard</h1><hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr />
      <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
                 <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" height="{160}" />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                  <img src="/images/puds.jpg" alt="stuff" />
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/1234/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
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
                      style={{ textDecoration: "none", color: "red", fontWeight: "bold" }} >
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
                      style={{ textDecoration: "none", color: "purple", fontWeight: "bold" }} >  
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
                      style={{ textDecoration: "none", color: "green", fontWeight: "bold" }} >  
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
                      style={{ textDecoration: "none", color: "maroon", fontWeight: "bold" }} >  
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
                      style={{ textDecoration: "none", color: "orange", fontWeight: "bold" }} >  
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
          </div>
        </>
);
}