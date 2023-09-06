export default (url: string, init: RequestInit) =>
  fetch(url, init).then(res => res.json());
