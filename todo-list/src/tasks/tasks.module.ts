import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from 'src/tasks/shared/task.service';
import { TasksController } from 'src/tasks/tasks.controller';
import { TaskSchema } from './schemas/task.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Task', schema: TaskSchema}])
    ],
    controllers: [ TasksController],
    providers: [TaskService]

})
export class TasksModule {}
