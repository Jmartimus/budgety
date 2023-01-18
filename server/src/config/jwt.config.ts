import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: (configService: ConfigService) => {
    return {
      secret: configService.get<string>('SECRET_KEY'),
      signOptions: { expiresIn: 3600 },
    };
  },
  inject: [ConfigService],
};
