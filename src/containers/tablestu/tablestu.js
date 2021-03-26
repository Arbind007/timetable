import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Tablestu() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/data")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Time-Table</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>{posts.A1}</td>
            <td>{posts.A2}</td>
            <td>{posts.A3}</td>
            <td>{posts.A5}</td>
            <td>{posts.A6}</td>
            <td>{posts.A7}</td>
            <td>{posts.A8}</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>{posts.A1}</td>
            <td>{posts.A2}</td>
            <td>{posts.A3}</td>
            <td>{posts.A5}</td>
            <td>{posts.A6}</td>
            <td>{posts.A7}</td>
            <td>{posts.A8}</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>{posts.C1}</td>
            <td>{posts.C2}</td>
            <td>{posts.C3}</td>
            <td>{posts.C5}</td>
            <td>{posts.C6}</td>
            <td>{posts.C7}</td>
            <td>{posts.C8}</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>{posts.D1}</td>
            <td>{posts.D2}</td>
            <td>{posts.D3}</td>
            <td>{posts.D5}</td>
            <td>{posts.D6}</td>
            <td>{posts.D7}</td>
            <td>{posts.D8}</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>{posts.E1}</td>
            <td>{posts.E2}</td>
            <td>{posts.E3}</td>
            <td>{posts.E5}</td>
            <td>{posts.E6}</td>
            <td>{posts.E7}</td>
            <td>{posts.E8}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
