import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      axios.get(`http://localhost:4000/users/${id}`)
      .then(res => {
        console.log("Response from backend:", res.data);
        setUser(res.data.user || res.data);
     })
    }, [id]);


  return (
    <>
      {user && (
        <div style={{
          maxWidth: "450px",
          margin: "50px auto",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
          background: "linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.4s, box-shadow 0.4s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
        }}
        >
          {/* Decorative circles */}
          <div style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            background: "rgba(255,255,255,0.3)",
            borderRadius: "50%",
            top: "-30px",
            left: "-30px",
            zIndex: 0
          }}></div>
          <div style={{
            position: "absolute",
            width: "60px",
            height: "60px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "50%",
            bottom: "-20px",
            right: "-20px",
            zIndex: 0
          }}></div>

          <h2 style={{
            color: "#00796b",
            fontSize: "28px",
            marginBottom: "15px",
            position: "relative",
            zIndex: 1
          }}>
            {user.name} {user.surname}
          </h2>

          <p style={{
            fontSize: "18px",
            color: "#004d40",
            margin: "8px 0",
            fontWeight: "500",
            position: "relative",
            zIndex: 1
          }}>
            City: <span style={{ fontWeight: "700" }}>{user.city}</span>
          </p>

          <p style={{
            fontSize: "18px",
            color: "#004d40",
            margin: "8px 0",
            fontWeight: "500",
            position: "relative",
            zIndex: 1
          }}>
            Age: <span style={{ fontWeight: "700" }}>{user.age} years old</span>
          </p>

          {/* Decorative underline */}
          <div style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#00796b",
            margin: "20px auto 10px",
            borderRadius: "2px",
            position: "relative",
            zIndex: 1
          }}></div>

          <p style={{
            fontSize: "14px",
            color: "#004d40",
            opacity: 0.8,
            position: "relative",
            zIndex: 1
          }}>
            Welcome to your profile card! 
          </p>

          {/* Footer icons */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "25px",
            position: "relative",
            zIndex: 1
          }}>
            <span style={{
              width: "30px",
              height: "30px",
              background: "#00796b",
              borderRadius: "50%",
              display: "inline-block",
              lineHeight: "30px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.3s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >✉️</span>
            <span style={{
              width: "30px",
              height: "30px",
              background: "#00796b",
              borderRadius: "50%",
              display: "inline-block",
              lineHeight: "30px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.3s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >📞</span>
            <span style={{
              width: "30px",
              height: "30px",
              background: "#00796b",
              borderRadius: "50%",
              display: "inline-block",
              lineHeight: "30px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.3s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >🌐</span>
          </div>
        </div>
      )}
    </>
  );
};
