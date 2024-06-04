import React, { useState } from "react";
import ModulesControls from "./ModuleControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { FaGripVertical } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { useParams } from "react-router";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
    
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  const updateModule = (module: any) => { 
  setModules(modules.map((m) => (m._id === module._id ? module : m)));
   
return (
    <><div className="wd-modules">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        } } />

      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        {!module.editing && module.name}
        {module.editing && (
          <input className="form-control w-50 d-inline-block"
            onChange={(e) => updateModule({ ...module, name: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateModule({ ...module, editing: false });
              }
            } }
            value={module.name} />
        )}
        <ModuleControlButtons
          moduleId={module._id}
          deleteModule={deleteModule}
          editModule={editModule} />
      </div>
    </div><div className="wd-modules">
        <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          } } />
        <ul id="wd-modules" className="list-group rounded-0">
          {modules
            .filter((module: any) => module.course === cid)
            .map(() => (
              {}!), module.editing && module.name)}
          {module.editing && (
            <input className="form-control w-50 d-inline-block"
              onChange={(e) => dispatch(
                updateModule({ ...module, name: e.target.value })
              )}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(updateModule({ ...module, editing: false }));
                }
              }}
              value={module.name} />
          />
        )}
        <ModuleControlButtons moduleId={module._id}
            deleteModule={(moduleId) => {
              dispatch(deleteModule(moduleId));
            } }
            editModule={(moduleId) => dispatch(editModule(moduleId))} />


        </></div></>


    

    };  
    
      <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" />
      {!module.editing && module.name}
      { module.editing && (
        <input className="form-control w-50 d-inline-block"
               onChange={(e) => updateModule({ ...module, name: e.target.value })}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                   updateModule({ ...module, editing: false });
                 }
               }}
               value={module.name}/>
      )}
      <div className="wd-modules">
        <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule= {()=>{
           dispatch(addModule({ name: moduleName, course: cid }));
           setModuleName("");
         }}
       />

        <ModuleControlButtons moduleId={module._id}
        deleteModule={moduleID}
        editModule={editModule}/>
        </div>

      <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <button id="wd-view-progress-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-3" style={{ bottom: "1px" }} />
        View Progress
      </button>
      <button id="wd-collapse-all-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-4" style={{ bottom: "1px" }} />
        Collapse All
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Unpublish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Unpublish all modules and items
            </a>
          </li>
                </ul>
            </div>
        </div>
      )}
