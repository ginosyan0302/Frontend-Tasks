import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const AddUser = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const handleAdd = async (data) => {
    await axios.post("http://localhost:4000/users", data);
    reset();
    navigate("/");
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "40px", backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      
      {/* Add User Button */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Link 
          to="/add"
          style={{
            display: "inline-block",
            padding: "12px 25px",
            backgroundColor: "#00796b",
            color: "#ffffff",
            fontWeight: "bold",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "16px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}
        >
          Add User
        </Link>
      </div>

      {/* Form */}
      <div style={{
        maxWidth: "450px",
        margin: "0 auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        backgroundColor: "#ffffff"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#00796b" }}>Add New User</h2>
        
        <form onSubmit={handleSubmit(handleAdd)}>
          {/* Name */}
          <div style={{ marginBottom: "15px" }}>
            <label>Name</label>
            <input 
              {...register("name", { required: "Name is required" })}
              style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            {errors.name && <p style={{ color: "red", marginTop: "5px" }}>{errors.name.message}</p>}
          </div>

          {/* Surname */}
          <div style={{ marginBottom: "15px" }}>
            <label>Surname</label>
            <input 
              {...register("surname", { required: "Surname is required" })}
              style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            {errors.surname && <p style={{ color: "red", marginTop: "5px" }}>{errors.surname.message}</p>}
          </div>

          {/* City */}
          <div style={{ marginBottom: "15px" }}>
            <label>City</label>
            <input 
              {...register("city", { required: "City is required" })}
              style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            {errors.city && <p style={{ color: "red", marginTop: "5px" }}>{errors.city.message}</p>}
          </div>

          {/* Age */}
          <div style={{ marginBottom: "20px" }}>
            <label>Age</label>
            <input 
              type="number"
              {...register("age", { 
                required: "Age is required",
                min: { value: 1, message: "Age must be at least 1" },
                max: { value: 120, message: "Age must be less than 120" }
              })}
              style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />
            {errors.age && <p style={{ color: "red", marginTop: "5px" }}>{errors.age.message}</p>}
          </div>

          <button 
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#00796b",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};
