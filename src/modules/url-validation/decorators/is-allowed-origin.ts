import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export function IsAllowedOrigin(allowedOrigins: string[], validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isAllowedOrigin',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [allowedOrigins],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!value || typeof value !== 'string') {
            return false;
          }

          try {
            const url = new URL(value);
            const allowedOrigins = args.constraints[0] as string[];

            return allowedOrigins.includes(url.origin);
          } catch {
            return false;
          }
        },
        defaultMessage() {
          return 'url origin is not allowed';
        },
      },
    });
  };
}
