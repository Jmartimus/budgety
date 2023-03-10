import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { UserSchema } from './dataStructureFiles/auth.schema';
import { AuthServices } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { jwtConfig } from 'src/config/jwt.config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserSchema', schema: UserSchema }]),
    JwtModule.registerAsync(jwtConfig),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [AuthServices, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
