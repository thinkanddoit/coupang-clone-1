class Service {
  getAuthHeaders(token: string) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
}

export default Service;
