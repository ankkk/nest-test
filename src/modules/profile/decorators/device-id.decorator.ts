import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { v5 as uuidv5 } from 'uuid';

const NAMESPACE = 'c8c8ba5d-5ffb-58fa-9624-f9d55899e27d';

export const DeviceId = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest<Request>();

  const deviceId = req.headers['x-device-id'];
  if (typeof deviceId === 'string' && deviceId.trim()) {
    return deviceId;
  }

  const rawIp = req.headers['cf-connecting-ip'] ?? req.headers['x-forwarded-for'] ?? req.ip;
  const ip = Array.isArray(rawIp) ? rawIp[0] : rawIp;

  return ip ? uuidv5(ip, NAMESPACE) : undefined;
});
