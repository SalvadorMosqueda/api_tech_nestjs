import { createParamDecorator, ExecutionContext } from "@nestjs/common";


//Creacion de decoradores @Request
export const CurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      console.log(data);
      return request.user || null;
    },
  );
