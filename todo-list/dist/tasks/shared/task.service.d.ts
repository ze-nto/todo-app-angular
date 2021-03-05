import { Task } from './task';
import { Model } from 'mongoose';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    getAll(): Promise<any>;
    getById(id: string): Promise<any>;
    create(task: Task): Promise<any>;
    update(id: string, task: Task): Promise<any>;
    delete(id: string): Promise<any>;
}
