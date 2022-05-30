class service {
  constructor() {}

  async getProfileRequest(url: string, token: string) {
    const req = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonReq = await req.json();
    return jsonReq;
  }

  async updateProfileRequest(url: string, obj: Object) {
    const req = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(obj),
    });
  }

  async getPostsRequest(url: string, token: string) {
    const req = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonReq = await req.json();
    return jsonReq;
  }

  async postLoginRequest(
    url: string,
    obj: { username: string; password: string }
  ) {
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(obj),
    });
    const jsonReq = await req.json();
    sessionStorage.setItem('access_token', jsonReq.access_token);
  }

  async postRegistrationRequest(
    url: string,
    obj: {
      email: string;
      username: string;
      first_name: string;
      last_name: string;
      telephone: string;
      password: string;
    }
  ) {
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const jsonReq = await req.json();
    return jsonReq;
  }
}

export default service;
