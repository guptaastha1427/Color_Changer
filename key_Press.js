const insert = document.querySelector('#insert')
window.addEventListener('keydown' , (e) => {
  insert.innerHTML = `<div><table>
  <tr>
    <td>key</td>
    <td>keyCode</td>
    <td>code</td>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table> </div>`
});
