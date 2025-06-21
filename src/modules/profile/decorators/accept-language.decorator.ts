import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const AcceptLanguage = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest<Request>();
  const raw = req.headers['accept-language'];

  if (!raw) {
    return undefined;
  }

  return raw.split(',')[0].split('-')[0].toLowerCase();
});
