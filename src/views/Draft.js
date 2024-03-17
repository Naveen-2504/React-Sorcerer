import React, { useEffect, useState } from "react";
import useDebounce from "../component/debounced";

export const Draft = () => {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);
  const debouncedSearch = useDebounce(data, 500);

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  useEffect(() => {
    let localData = localStorage.getItem(`sorcerer`);
    let parseData = JSON.parse(localData);
    let defaultData = parseData ? parseData : data;
    let localName = localStorage.getItem(`name`);
    let nameData = JSON.parse(localName);
    let names = nameData ? nameData : name;
    if (names) {
      setOpen(false);
    }
    setData(defaultData);
    setName(names);
  }, []);

  const renderColoredText = (text) => {
    if (debouncedSearch) {
      return text.split("\n").map((line, index) => (
        <>
          <>{console.log(line)}</>
          {line.split("#").length === 2 && (
            <p key={index}>
              {line.split("#").map((part, partIndex) => {
                if (partIndex % 2 === 0) {
                  return <span key={partIndex}>{part}</span>;
                } else {
                  return <h1 key={partIndex}>{part}</h1>;
                }
              })}
            </p>
          )}
          {line.split("***").length === 2 ? (
            <p key={index}>
              {line.split("***").map((part, partIndex) => {
                if (partIndex % 2 === 0) {
                  return <span key={partIndex}>{part}</span>;
                } else {
                  return (
                    <p>
                      <u key={partIndex}>{part}</u>
                    </p>
                  );
                }
              })}
            </p>
          ) : (
            <>
              {line.split("**").length === 2 && (
                <p key={index}>
                  {line.split("**").map((part, partIndex) => {
                    if (partIndex % 2 === 0) {
                      return <span key={partIndex}>{part}</span>;
                    } else {
                      return (
                        <span style={{ color: "#ff0000" }} key={partIndex}>
                          {part}
                        </span>
                      );
                    }
                  })}
                </p>
              )}
            </>
          )}
          {line.split("*").length === 2 && (
            <p key={index}>
              {line.split("*").map((part, partIndex) => {
                if (partIndex % 2 === 0) {
                  return <span key={partIndex}>{part}</span>;
                } else {
                  return <b key={partIndex}>{part}</b>;
                }
              })}
            </p>
          )}
        </>
      ));
    }
  };

  const onsubmit = (text) => {
    if (text) {
      localStorage.setItem(`name`, JSON.stringify(name));
      setOpen(false);
    } else {
      localStorage.setItem(`sorcerer`, JSON.stringify(data));
    }
  };

  return (
    <>
      {open && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onsubmit("model");
                }}
                className="form-modal"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  gap: 20,
                }}
              >
                <div style={{ width: "100%" }}>
                  <h3>Enter your name</h3>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%", height: "3rem" }}
                    required
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <button>save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px",
          gap: "50px",
        }}
        className="container"
      >
        <h1 style={{ width: "55%", textAlign: "end" }}>
          Demo editor by {name || "You"}
        </h1>
        <button onClick={() => onsubmit()}>save</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100vh",
          padding: "0px 22px",
          gap: "69px",
        }}
        className="container"
      >
        <div style={{ width: "48%", height: "100%" }}>
          <p>Type Here</p>
          <textarea
            value={data}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "48%", height: "100%" }}>
          <p>Result</p>
          <div
            style={{
              border: "2px solid skyblue",
              width: "100%",
              height: "100%",
            }}
          >
            {renderColoredText(data)}
          </div>
        </div>
      </div>
    </>
  );
};
