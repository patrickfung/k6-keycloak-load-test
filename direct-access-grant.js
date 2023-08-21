import http from 'k6/http';
import { sleep, check } from 'k6';
import urlencode from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js';

export let options = {
  vus: 1,
  iterations: 1,
};

export default function () {
   const url = 'https://{$URL}/realms/{$realms}/protocol/openid-connect/token';
   const payload = urlencode({
    username: $usenname,
    password: $password,
    client_id: $client_id,
    client_secret: $client_secret,
    grant_type: 'password'
  });

  const params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'is status 200': (r) => r.status === 200,
    'has JWT access token': (r) => r.json().access_token,
    'has JWT refresh token': (r) => r.json().refresh_token,
  });

  sleep(1);
}
