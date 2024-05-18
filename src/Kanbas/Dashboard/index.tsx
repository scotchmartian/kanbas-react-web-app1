import React from "react";
export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">My Courses</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/puds.jpg" width={200} alt="stuff" /> 
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/public/images/kick.jpg" width={200} alt="stuff"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                JRNL8230 Tell Good Stories
              </a>
              <p className="wd-dashboard-course-title">
                Tell stories that are awesome
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
            </div>
            <div className="wd-dashboard-course">
            <img src="/images/kick.jpg" width={200} alt="stuff"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                LIFE1011 Don't Be An Idiot
              </a>
              <p className="wd-dashboard-course-title">
                Don't be a big dummy and make good decisions
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a> 
            </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} alt="stuff"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                FINS1023 The Art of Finesse
              </a>
              <p className="wd-dashboard-course-title">
                How to be a finesse gawd
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>
        </div>

        <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} alt="stuff"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                PHYS Calisthenics
              </a>
              <p className="wd-dashboard-course-title">
                Get in better shape
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a> </div>
        </div>

           <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} alt="stuff"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                MONY1234 Get Rich Quick
              </a>
              <p className="wd-dashboard-course-title">
                Make money mad fast
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a> </div>
            </div>
          <div className="wd-dashboard-course"> ... </div>
          <div className="wd-dashboard-course"> ... </div>
        </div>
      </div>
  );}
  
