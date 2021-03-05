import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

import { mongoConfig }  from './mongo.config';


@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(mongoConfig.apiString)
],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
