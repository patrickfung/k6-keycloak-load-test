import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  http.get(`https://{$URL}/realms/{$realms}/.well-known/openid-configuration`);
  sleep(1);
}
