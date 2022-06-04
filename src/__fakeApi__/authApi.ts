import createResourceId from '../utils/createResourceId';
import { sign, decode, JWT_SECRET, JWT_EXPIRES_IN } from '../utils/jwt';
import wait from '../utils/wait';
import { User } from '../types/user';

const users = [
  {
    id: '5e86809283e28b96d2d38537',
    avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
    email: 'demo@demo.com',
    name: 'Ahsan Ali Mansoor',
    password: 'Password123!',
    plan: 'Premium',
  },
];

class AuthApi {
  async login(email: string, password: string): Promise<string> {
    await wait(500);

    return new Promise((resolve, reject) => {
      try {
        // Find the user
        const user = users.find((_user) => _user.email === email);

        if (!user || user.password !== password) {
          reject(new Error('Please check your email and password'));
          return;
        }

        // Create the access token
        const accessToken = sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        resolve(accessToken);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async register(
    email: string,
    name: string,
    password: string
  ): Promise<string> {
    await wait(1000);

    return new Promise((resolve, reject) => {
      try {
        // Check if a user already exists
        let user = users.find((_user) => _user.email === email);

        if (user) {
          reject(new Error('User already exists'));
          return;
        }

        user = {
          id: createResourceId(),
          avatar: '',
          email,
          name,
          password,
          plan: 'Standard',
        };

        users.push(user);

        const accessToken = sign({ userId: user?.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        resolve(accessToken);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  me(accessToken: string): Promise<User> {
    return new Promise((resolve, reject) => {
      try {
        // Decode access token
        const { userId } = decode(accessToken) as any;

        // Find the user
        const user = users.find((_user) => _user.id === userId);

        if (!user) {
          reject(new Error('Invalid authorization token'));
          return;
        }

        resolve({
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          plan: user.plan,
        });
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const authApi = new AuthApi();
