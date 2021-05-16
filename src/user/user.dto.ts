export class UserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly phoneNumber: string;
  readonly address?: string;
  readonly isAdmin?: Boolean;
}