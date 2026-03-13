import { useEffect, useState } from "react";
import SuccessModal from "../../components/modals/successModal/SuccessModal";
import "./Students.scss";

const initialStudents = [
  {
    name: "Adeel Solangi",
    email: "adeel.solangi@gmail.com",
    phone: "+916375123367",
    age: "24",
    bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    name: "Afzal Ghaffar",
    email: "Afzal.ghaffar@gmail.com",
    phone: "+9191675123321",
    age: "28",
    bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
];

export default function Students() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("localeData");
    return saved ? JSON.parse(saved) : initialStudents;
  });
  const [modalMessage, setModalMessage] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editStudent, setEditStudent] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    localStorage.setItem("localeData", JSON.stringify(data));
  }, [data]);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    setModalMessage("Student deleted successfully!");
    setTimeout(() => {
      setModalMessage(null);
    }, 4000);
    localStorage.setItem("localeData", JSON.stringify(updatedData));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditStudent(data[index]);
  };

  const handleSave = (index) => {
    const updatedData = [...data];
    updatedData[index] = editStudent;
    setData(updatedData);
    setEditIndex(null);
    setModalMessage("Student updated successfully!");
    localStorage.setItem("localeData", JSON.stringify(updatedData));
  };

  return (
    <div className="section students-page">
      <h2>Total Students: {data.length}</h2>
      <div className="student-table-wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: "7rem" }}>Sl no.</th>
              <th style={{ width: "30rem" }}>Name</th>
              <th style={{ width: "30rem" }}>Email</th>
              <th style={{ width: "10rem" }}>Phone</th>
              <th style={{ width: "7rem" }}>Age</th>
              <th style={{ width: "20rem" }}>Bio</th>
              <th style={{ width: "15rem" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  {editIndex === i ? (
                    <input
                      type="text"
                      value={editStudent.name}
                      onChange={(e) =>
                        setEditStudent({ ...editStudent, name: e.target.value })
                      }
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td>
                  {editIndex === i ? (
                    <input
                      type="email"
                      value={editStudent.email}
                      onChange={(e) =>
                        setEditStudent({
                          ...editStudent,
                          email: e.target.value,
                        })
                      }
                    />
                  ) : (
                    student.email
                  )}
                </td>
                <td>
                  {editIndex === i ? (
                    <input
                      type="number"
                      value={editStudent.phone}
                      onChange={(e) =>
                        setEditStudent({
                          ...editStudent,
                          phone: e.target.value,
                        })
                      }
                    />
                  ) : (
                    student.phone
                  )}
                </td>
                <td>
                  {editIndex === i ? (
                    <input
                      type="number"
                      value={editStudent.age}
                      onChange={(e) =>
                        setEditStudent({ ...editStudent, age: e.target.value })
                      }
                    />
                  ) : (
                    student.age
                  )}
                </td>
                <td>
                  {editIndex === i ? (
                    <textarea
                      type="text"
                      value={editStudent.bio}
                      row="10"
                      style={{"height": "100px", "resize": "none", "borderRadius":"0.25rem"}}
                      onChange={(e) =>
                        setEditStudent({
                          ...editStudent,
                          bio: e.target.value,
                        })
                      }
                    />
                  ) : (
                    student.bio
                  )}
                </td>
                <td>
                  {editIndex === i ? (
                    <button
                      className="btn btn-success"
                      onClick={() => handleSave(i)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(i)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "0.35rem" }}
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalMessage && (
        <SuccessModal
          message={modalMessage}
          onClose={() => setModalMessage(null)}
        />
      )}
    </div>
  );
}
