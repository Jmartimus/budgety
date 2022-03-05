import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/Auth/auth.module';
import { UserSchema } from 'src/Auth/auth.schema';
import { ExpenseSchema, IncomeSchema } from './schema/transaction.schema';
import { TransactionController } from './transaction.controller';
import { TransactionServices } from './transaction.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'IncomeSchema', schema: IncomeSchema },
      { name: 'ExpenseSchema', schema: ExpenseSchema },
      { name: 'UserSchema', schema: UserSchema },
    ]),
    AuthModule,
  ],
  providers: [TransactionServices],
  controllers: [TransactionController],
})
export class TransactionModule {}
