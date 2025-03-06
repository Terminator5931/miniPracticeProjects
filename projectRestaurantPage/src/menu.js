export default function menu() {
  document.getElementById('content').innerHTML = `
<div class="menuitem">
  <table>
    <thead>
      <tr>
        <th>Day</th>
        <th>Timings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Monday</td>
        <td>1200 - 1800</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>1200 - 1800</td>
      </tr>
      <tr>
        <td>Wednesday</td>
        <td>1200 - 1800</td>
      </tr>
      <tr>
        <td>Thursday</td>
        <td>1200 - 1800</td>
      </tr>
      <tr>
        <td>Friday</td>
        <td>1200 - 1800</td>
      </tr>
      <tr>
        <td>Saturday</td>
        <td>1200 - 1800</td>
      </tr>
    </tbody>
  </table>
</div>
`;
}
