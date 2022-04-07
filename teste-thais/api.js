function callApi(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw response.status;
        return response.json();
      })
      .then((json) => {})
      .catch((error) => {
        console.error(error);
      });
  });
}
