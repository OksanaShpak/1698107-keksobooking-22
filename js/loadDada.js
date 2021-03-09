export default function loadData() {
  return fetch('https://22.javascript.pages2.academy/keksobooking/data')
    .then(response => response.json())
    .catch(err => {
      console.log(err);
      const loadError = document.getElementById('load-error').content.querySelector('.error').cloneNode(true);
      loadError.querySelector('button').addEventListener('click', function () {
        loadError.remove();
      });
      document.body.appendChild(loadError);
      return [];
    });
}
