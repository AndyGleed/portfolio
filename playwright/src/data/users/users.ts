import { AutomationUser } from './automationUser';

export class Users {
  static get joe(): AutomationUser {
    const user: AutomationUser = {
      name: 'Sm9lIEJsb2dz',
      email: 'am9lYmxvZ3MtYXV0MUBhbmR5Z2xlZWQuY29t',
      password: 'WEg2IWN4OVBwNVk4SGRp',
    };
    return user;
  }

  static get john(): AutomationUser {
    const user: AutomationUser = {
      name: 'Sm9obiBEb2U=',
      email: 'am9obmRvZS1hdXQyQGFuZHlnbGVlZC5jb20=',
      password: 'UUhKWjJKciF1VFZBYjJU',
    };
    return user;
  }
}
