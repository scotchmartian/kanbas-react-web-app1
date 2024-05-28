import ModulesControls from "./ModuleControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { FaGripVertical } from "react-icons/fa6";
import { useParams } from "react-router";
import db from "../../Database";
import "./index.css";
function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
      <ul className="list-group">
        {
         modules
           .filter((module) => module.course === courseId)
           .map((module, index) => (
             <li key={index} className="list-group-item">
              <b>{module.name}</b>
               <p>{module.description}</p>
               {
                  module.lessons && (
                      <ul className="list-group">
                          {
                              module.lessons.map((lesson, index) => (
                                  <li key={index} className="list-group-item">
                                      {lesson.name}
                                      <p>{lesson.description}</p>
                                  </li>
                              ))
                          }
                      </ul>
                  )
               }
             </li>
        ))
        }
      </ul> 
    );
  }
  export default ModuleList;
  // export default ModuleList;
  // const { cid } = useParams();
  // const modules = db.modules;
  //   return (
  //     <><div>
  //       <button>Collapse All</button> <button>View Progress</button> <button>Publish All</button> <button>Module</button>
  //       <div id="wd-modules">
  //         <ModulesControls /><br /><br /><br /><br />
  //         <ul id="wd-modules" className="list-group rounded-0">
  //           {modules
  //             .filter((module: any) => module.course === cid)
  //             .map((module: any) => (
  //               <li className="wd-modulelist-group-item p-0 mb-5 fs-5 border-gray">
  //                 <div className="wd-title p-3 ps-2 bg-secondary">
  //                   <FaGripVertical className="me-2 fs-3" />
  //                   {module.name}
  //                   Week 1
  //                   <ModuleControlButtons />
  //                 </div>
  //                 <ul className="wd-lessons list-group rounded-0">
  //                   {
  //                   module.lessons && (
  //                     <>
  //                     {
  //                       module.lesson.map((lesson:string, index : string)=> (
  //                         <li key ={index} className="list-group"> 
  //                         {lesson.name}
  //                         </li>
  //                       ))
  //                       }
  //                     <li className="wd-lesson list-group-item p-3 ps-1">
  //                       <FaGripVertical className="me-2 fs-3" />
  //                       LEARNING OBJECTIVES
  //                       <LessonControlButtons />
  //                     </li>
  //                     <li className="wd-lesson list-group-item p-3 ps-1">
  //                       <FaGripVertical className="me-2 fs-3" />
  //                       {lesson.name}
  //                       Introduction to the course
  //                       <LessonControlButtons />
  //                     </li>
              
  //                     </>
  //                     )}
                    
  //                 </ul>
  //               </li>
  //             ))}
  //         </ul>
  //         <li className="wd-lesson list-group-item p-3 ps-1">
  //           Learn what is Web Development
  //         </li>
  //         <li className="wd-lesson list-group-item p-3 ps-1">
  //           LESSON 1
  //         </li>
  //         <li className="wd-lesson list-group-item p-3 ps-1">
  //           LESSON 2
  //         </li>
  //       </div>
  //   </div>
  //     <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
  //         <div className="wd-title p-3 ps-2 bg-secondary">
  //           Week 2
  //         </div>
  //         <ul className="wd-lessons list-group rounded-0">
  //           <li className="wd-lesson list-group-item p-3 ps-1">
  //             LEARNING OBJECTIVES
  //           </li>
  //           <li className="wd-lesson list-group-item p-3 ps-1">
  //             LESSON 1
  //           </li>
  //           <li className="wd-lesson list-group-item p-3 ps-1">
  //             LESSON 2
  //           </li>
  //         </ul>
  //       </li></>
      
  // );}