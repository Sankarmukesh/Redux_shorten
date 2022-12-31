import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllUrls, deleteUrl, ShortenAction } from "../../redux/actions/ShortenActions";

const ShortenUrl = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const urls = useSelector((state) => state.Shortenreducers.urls);
  useEffect(() => {
    dispatch(AllUrls());
  }, [dispatch]);


  const shortthenUrl = async () =>{
            dispatch(ShortenAction(url))
            setUrl("")
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ padding: "20px 0px" }}>URL shorten Link Application</h1>
          <div style={{ marginLeft: "-90px" }}>
            Paste the long url and get the shortest form of it
          </div>
        </div>
        <div>
          <img src="/office.png" alt="" width={350} height={300} />
        </div>
      </div>
      <div id="error" style={{color:"red",padding:"5px",textAlign:"center"}}></div>
      <div
        style={{
          border: "solid 1.5px #d3d3d3",
          boxShadow: " 0 0 5pt 2pt #d3d3d3",
          padding: "25px 60px",
          borderRadius: "5px",
          width: "700px",
          margin: "10px auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          style={{
            padding: "5px",
            borderRadius: "5px",
            width: "570px",
            border: "1px solid #d3d3d3",
            outline: "0",
            background: "white",
          }}
          placeholder="Shorten a link here...."
        />
        {url!=="" ? <button
          style={{
            background: "#063970",
            color: "white",
            padding: "6px 8px",
            borderRadius: "5px",
          }}
          onClick={e=>{shortthenUrl()}}
        >
          Shorten It
        </button> 
        :
        <button
          style={{
            background: "#0639709c",
            color: "white",
            cursor:"not-allowed",
            padding: "6px 8px",
            borderRadius: "5px",
          }}
          
        >
         Add link first
        </button>
        }
      </div>
      <div>
        {urls.map((u, index) => (
          <div
            style={{
              border: "solid 1.5px #d3d3d3",
              boxShadow: " 0 0 5pt 2pt #d3d3d3",
              padding: "5px",
              borderRadius: "5px",
              width: "810px",
              margin: "10px auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "white",
            }}
          >
            <div
              style={{
                border: "solid 1.5px #d3d3d3",
                padding: "12px",
                borderRadius: "5px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "white",
              }}
            >
              <div>
                <a href={u.original_link}>{u.original_link}</a>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <div>
                  <a href={u.full_short_link}>{u.full_short_link}</a>
                </div>
                <button
                className="copybuttons"
                  style={{
                    background: "#063970",
                    color: "white",
                    padding: "5px 8px",
                    borderRadius: "5px",
                  }}
                  onClick={e=>{
                    navigator.clipboard.writeText(u.full_short_link)
                    
                    const copies = document.querySelectorAll('.copybuttons')
                    for(let i=0;i<copies.length;i++){
                        copies[i].textContent = "copy"
                        copies[i].style.background = "#063970"
                    }
                    e.target.textContent="copied"
                    e.target.style.background="green"
                  }}
                >
                  Copy
                </button>
                <div><i class="fa-solid fa-trash" style={{cursor:"pointer",color:"red"}} onClick={e=>{dispatch(deleteUrl(u.id))}}></i></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortenUrl;
