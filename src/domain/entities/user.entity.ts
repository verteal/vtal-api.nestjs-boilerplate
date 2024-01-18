import { Entity } from '@/core/entities/entity';
import { type Optional } from '@/core/types/optional';
import { UUID } from './value-objects/uuid.entity';

export interface UserProps {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Example
export class User extends Entity<UserProps> {
  get username() {
    return this.props.username;
  }

  changeUsername(username: string) {
    this.props.username = username;
  }

  static create(props: Optional<UserProps, 'createdAt'>, id?: UUID) {
    const user = new User(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    );

    return user;
  }
}
