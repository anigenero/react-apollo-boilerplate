import { createTransform } from 'redux-persist';

export namespace TaskActionTypes {

    export const ADD = '@@task/add';
    export const SET_TASK_COMPLETE = '@@task/set_complete';
    export const REMOVE = '@@task/remove';

}

// tslint:disable-next-line:interface-over-type-literal
export type TaskActions = {

    [TaskActionTypes.ADD]: {
        type: typeof TaskActionTypes.ADD;
        task: ITask;
    };

    [TaskActionTypes.SET_TASK_COMPLETE]: {
        type: typeof TaskActionTypes.SET_TASK_COMPLETE;
        id: number;
    };

    [TaskActionTypes.REMOVE]: {
        type: typeof TaskActionTypes.REMOVE;
        id: number;
    };

};

export interface ITask {

    complete: boolean;
    text: string;

}

export interface ITaskState {

    tasks: ITask[];

}

export type TaskAction = TaskActions[typeof TaskActionTypes.ADD] |
    TaskActions[typeof TaskActionTypes.REMOVE] |
    TaskActions[typeof TaskActionTypes.SET_TASK_COMPLETE];

export const taskStateTransform = createTransform(
    (inboundState: ITaskState, key) => {
        if (key !== 'task') {
            return inboundState;
        } else {
            return {
                ...inboundState
            };
        }
    },
    (outboundState) => outboundState
);