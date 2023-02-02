import {createSlice} from '@reduxjs/toolkit'

export default bug

function bug (bug){
    this._id = bug._id;
    this.name = bug.name;
    this.details = bug.details;
    this.steps = bug.step;
    this.version = bug.version;
    this.priority = bug.priority;
    this.assigned =bug.assigned;
    this.creator = bug.creator;
    this.time = bug.time
}