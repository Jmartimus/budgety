import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from './dataStructureFiles/auth.interfaces';
import { JwtPayload } from './jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel('UserSchema')
    private readonly authModel: Model<User>,
    configService: ConfigService
  ) {
    console.log(
      configService.get<string>('JWT_SECRET'),
      configService.get<string>('MONGO_URI'),
      configService.get<string>('PORT'),
      configService.get<string>('NODE_ENV')
    );
    super({
      secretOrKey: configService.get<string>('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload): Promise<User> {
    const { email } = payload;
    const user: User = await this.authModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
