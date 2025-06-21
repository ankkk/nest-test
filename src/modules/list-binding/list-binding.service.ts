import { Injectable } from '@nestjs/common';
import { BindListsDto } from './dto/bind-lists.dto';

@Injectable()
export class ListBindingService {
  bind({ left, right, leftKey, rightKey }: BindListsDto) {
    const rightMap = new Map<unknown, Record<string, unknown>>();

    for (const item of right) {
      const key = item[rightKey];
      if (key === undefined) {
        continue;
      }

      const rest = { ...item };
      delete rest[rightKey];

      rightMap.set(key, rest);
    }

    return left.map((item) => {
      const key = item[leftKey];
      const rightPart = rightMap.get(key) ?? {};

      return { ...item, ...rightPart };
    });
  }
}
