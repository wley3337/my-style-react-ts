import { user, initUser } from './User.reducers';
import { setUser, clearUser } from './User.actions';
import { CLEAR_USER, SET_USER } from './User.types';

describe('User.redux', () => {
  const mockUserPayload = {
    firstName: 'Robert',
    lastName: 'Patt',
    username: 'jr',
  };
  describe('reducer', () => {
    it('returns initial state on init', async () => {
      const userAction = { type: 'init', payload: mockUserPayload };
      expect(user(undefined, userAction)).toBe(initUser);
    });
    it('returns initial state on CLEAR_USER', async () => {
      const userAction = { type: CLEAR_USER, payload: initUser };
      expect(user(mockUserPayload, userAction)).toEqual(initUser);
      expect(user(mockUserPayload, userAction)).not.toBe(initUser);
    });
    it('returns new user from payload on SET_USER', async () => {
      const userAction = { type: SET_USER, payload: mockUserPayload };
      expect(user(initUser, userAction)).toBe(mockUserPayload);
    });
  });

  describe('actions', () => {
    it('returns correct object for setUser', async () => {
      expect(setUser(mockUserPayload).payload).toBe(mockUserPayload);
    });
    it('returns correct object for clearUser', async () => {
      expect(clearUser().payload).toBe(initUser);
    });
  });
});
