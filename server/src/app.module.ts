import Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './Auth/auth.module';
import { BudgetModule } from './Budgets/budget.module';
import { FinanceTipsModule } from './FinanceTips/financeTips.module';
import { TransactionModule } from './Transactions/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
        ? `${process.cwd()}/envs/.env${
            process.env.NODE_ENV !== 'dev' ? `.${process.env.NODE_ENV}` : ''
          }`
        : `../app.yaml`,
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
        NODE_ENV: Joi.string().required(),
        ORIGIN_URL: Joi.string().required(),
        PORT: Joi.number().required(),
        SECRET_KEY: Joi.string().required(),
      }),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
    }),
    AuthModule,
    BudgetModule,
    TransactionModule,
    FinanceTipsModule,
  ],
})
export class AppModule {}
