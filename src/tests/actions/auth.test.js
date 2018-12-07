import {login, logout} from '../../actions/auth';

test('Shoudle handle login', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Shoudle handle logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});