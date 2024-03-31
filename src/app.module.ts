import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoService } from './todo/services/TodoService';
import { TenantService } from './tenant/services/TenantService';
import { TenantMiddleware } from './tenant/middelwares/TenantMiddleware';
import { TodoController } from './todo/controllers/todo.controller';
import { TenantController } from './tenant/controllers/tenant.controller';

@Module({
  imports: [],
  controllers: [AppController, TodoController, TenantController],
  providers: [TodoService, TenantService, TenantMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantMiddleware).forRoutes('/todos');
  }
}
