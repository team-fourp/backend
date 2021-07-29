import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop as Property, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  toJSON: {
    transform: (doc, ret) => {
      const user = ret;
      delete user.password;
      delete user._id;
      delete user.updated_at;
      delete user.__v;
      delete user.user_role;
      return user;
    }
  },
  toObject: {
    transform: (doc, ret) => {
      const user = ret;
      delete user.__v;
      return user;
    }
  }
})
export default class User {
  @Field(() => Date, { nullable: true })
  created_at?: Date;

  @Field(() => Date, { nullable: true })
  updated_at?: Date;

  @Field({ nullable: true })
  @Property({ required: true, unique: true })
  id: string;

  // basic props
  @Field({ nullable: true })
  @Property({ required: true, unique: true })
  email?: string;

  @Field({ nullable: true })
  @Property({ required: true })
  first_name?: string;

  @Field({ nullable: true })
  @Property({ required: true })
  last_name?: string;

  @Field({ nullable: true })
  @Property({ required: true, unique: true })
  nickname?: string;

  @Field({ nullable: true })
  @Property({ enum: [0, 1, 2, 3], default: 0 })
  gender?: number;

  @Field({ nullable: true })
  @Property()
  picture: string;

  @Field({ nullable: true })
  @Property()
  picture_path: string;

  @Field({ nullable: true })
  @Property()
  date_born: string;

  @Field({ nullable: true })
  @Property({ default: false })
  confirmed_email: boolean;

  // Field for manage roles
  /*ROLE_USER - 1001
  ROLE_FREELANCE - 1002
  ROLE_ADMIN - 1003
  */
  @Field({ nullable: true })
  @Property({ enum: ['ROLE_USER', 'ROLE_FREELANCE', 'ROLE_ADMIN'], default: 'ROLE_USER' })
  user_role?: string;

  @Field({ nullable: true })
  @Property({ enum: [1001, 1002, 1003], default: 1001 })
  user_code?: number;

  @Field({ nullable: true })
  @Property()
  biography: string;

  @Field(() => [Int], { nullable: true })
  @Property({ dim: 1, type: Number })
  teach_schedule?: number[];

  @Field({ nullable: true })
  @Property()
  is_auth_teacher?: boolean;

  @Field({ nullable: true })
  @Property()
  request_for_freelance?: boolean;

  @Field({ nullable: true })
  @Property()
  teach_title?: string;

  @Field({ nullable: true })
  @Property()
  tracing?: number;

  // ===== Privates fields ====
  // Fields for tokens

  @Property()
  refresh_token_paypal: string;

  @Property()
  token_verify_account?: string;

  @Property()
  token_password?: string;

  @Property({ required: true })
  password?: string;

  // Fields for freelances
  @Property()
  identification?: number;

  @Property({ enum: ['CC', 'CE', 'TI'] })
  identification_type?: string;

  @Property()
  phone?: number;

  @Property()
  code_phone?: string;

  @Property()
  expedition_date?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
