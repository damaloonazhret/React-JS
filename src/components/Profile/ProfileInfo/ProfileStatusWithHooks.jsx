import React, {useState} from "react";
import {updateStatus} from "../../../Redux/profileReducer";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => setStatus(e.currentTarget.value)

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;