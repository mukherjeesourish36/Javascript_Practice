const search = document.querySelector('#searchBox');
const stu = document.querySelectorAll('#students li');

search.addEventListener('input', () => {
  const text = search.value.toLowerCase();

  stu.forEach((item) => {
    var st = item.textContent.toLowerCase();
    if (st.includes(text)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});
