import { Entity } from '@/core/entities/entity';

export interface UserProps {
  username: string;
  email: string;
  password: string;
}

// Example
export class User extends Entity<UserProps> {
  get username() {
    return this.props.username;
  }

  changeUsername(username: string) {
    this.props.username = username;
  }
}
