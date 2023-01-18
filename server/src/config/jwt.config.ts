import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: (configService: ConfigService) => {
    console.log(
      'jwtConfig',
      configService.get<string>('ENV_TYPE'),
      configService.get<string>('JWT_SECRET'),
      configService.get<string>('MONGO_URI'),
      configService.get<string>('PORT'),
      configService.get<string>('NODE_ENV')
    );
    return {
      secret: configService.get<string>('SECRET_KEY'),
      signOptions: { expiresIn: 3600 },
    };
  },
  inject: [ConfigService],
};
