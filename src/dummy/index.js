// // export const Draft = () => {
// //   const [content, setContent] = useState("");
// //   const editorRef = useRef(null);

// //   const handleChange = () => {
// //     const newContent = editorRef.current.innerText;
// //     // setContent(newContent);
// //     checkAndChangeColor(newContent);
// //   };

// //   const checkAndChangeColor = (newContent) => {
// //     const pattern = /\*\*\*/g;
// //     let r = newContent.split("").reverse().join("")
// //     const splitContent = r.split(pattern);

// //     // Initialize an array to store the colored content
// //     const coloredContent = [];

// //     // Iterate over the split content and add each part to the coloredContent array
// //     splitContent.forEach((part, index) => {
// //       // Add the part
// //       coloredContent.push(part);

// //       // Add the separator with red color if it exists (except for the last part)
// //       if (index < splitContent.length - 1) {
// //         coloredContent.push(<span key={index} style={{ color: "red" }}>***</span>);
// //       }
// //     });
// //     // console.log(r,newContent.split("").reverse(), "ioooooooooooooooo");
// //     // setContent(r);
// //     // Set the colored content as the new content
// //     setContent(coloredContent);
// //   };

// //   return (
// //     <div>
// //       <div
// //         contentEditable={true}
// //         ref={editorRef}
// //         style={{ border: "1px solid #ccc", minHeight: "100px", padding: "5px" }}
// //         onInput={handleChange}
// //       >
// //         <p>{content}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // // const [todos, setTodos] = useState("");

// const renderColoredText = (text) => {
//   return text.split("\n").map((line, index) => (
//     <p key={index}>
//       {line.split("***").map((part, partIndex) => {
//         if (partIndex % 2 === 0) {
//           return (
//             <span style={{ color: "red" }} key={partIndex}>
//               {part}
//             </span>
//           );
//         } else {
//           return (
//             <span key={partIndex} style={{ color: "red" }}>
//               {part}
//             </span>
//           );
//         }
//       })}
//     </p>
//   ));
// };

// // // const formatText = (text) => {
// // //   console.log(text, "opopopop");
// // //   if (!text) return []; // Add null check here
// // //   // const parts = text.split("***");
// // //   return text.split("\n").map((line, index) => (
// // //     <p key={index}>
// // //       {line.split("***").map((part, partIndex) => {
// // //         if (partIndex % 2 === 0) {
// // //           return <span key={partIndex}>{part}</span>;
// // //         } else {
// // //           return (
// // //             <span key={partIndex} style={{ color: "red" }}>
// // //               {part}
// // //             </span>
// // //           );
// // //         }
// // //       })}
// // //     </p>
// // //   ));
// // // };

// // // console.log(todos, "ooooopooopopopopopop");

// // // const [content, setContent] = useState("");
// // // const editorRef = useRef(null);

// // // const handleChange = () => {
// // //   const newContent = editorRef.current.innerText;
// // //   setContent(newContent);
// // //   checkAndChangeColor(newContent);
// // // };
// // // const checkAndChangeColor = (newContent) => {
// // //   const pattern = /\*\*\*/g;
// // //   const match = newContent.match(pattern);

// // //   if (match) {
// // //     const coloredContent = newContent.split('***').map((text, index) => {
// // //       return index % 2 === 0 ? text : <span style={{ color: 'red' }}>***</span>;
// // //     });

// // //     setContent(coloredContent);
// // //   }
// // // };

// // // return (
// // //   <main className="container">
// // //     <section className="header">
// // //       <div>
// // //         <h1>Demo editor by</h1>
// // //       </div>
// // //       <div>
// // //         <button>Save</button>
// // //       </div>
// // //     </section>
// // //     <section className="compiler">
// //       // <div
// //       //   contentEditable
// //       //   ref={editorRef}
// //       //   style={{
// //       //     border: "1px solid #ccc",
// //       //     minHeight: "100px",
// //       //     padding: "5px",
// //       //   }}
// //       //   onInput={handleChange}
// //       // >
// //       //   {content}
// //       // </div>
// // //     </section>
// // //   </main>
// // // );

// export const Draft = () => {
//   const [todos, setTodos] = useState("");
//   const [content, setContent] = useState("foo");
//   const contentEditableRef = useRef(null);
//   const [divText, setDivText] = useState("Hello!");

//   const [divHtml, setDivHtml] = useState("");
//   const htmlRef = useRef(null);

// const handleInputChange = (event) => {
//   setTodos(event.target.value);
// };

//   // const handleInputChange = (event) => {
//   //   setTodos(event.target.value);
//   // };

//   // const handleInput = (event) => {
//   //   // Ensure that setting inner HTML via dangerouslySetInnerHTML does not interfere with user input
//   //   console.log(event.target.innerHTML, "oooo");
//   //   // if (!event.target.getAttribute("contentEditable")) {
//   //   setDivHtml(event.target.innerHTML);
//   //   // }
//   // };

//   const [htmlContent, setHtmlContent] = useState(
//     "<div><h1>Hello</h1><p>This is a paragraph</p></div>"
//   );

//   const handleInput = (event) => {
//     const value = htmlRef.current.innerHTML;
//     console.log(value);
//     // const reversedText = event.target.innerText
//     //   .split(" ")
//     //   .map((word) => word.split("").reverse().join(""))
//     //   .join(" ");
//     console.log(
//       event.target,
//       // htmlContent,
//       // event.target.,
//       "event.target.innerText"
//     );
//     // setDivText(event.target.innerText);
//     // const updatedHtml = htmlContent.replace(
//     //   /<h1>.*?<\/h1>/,
//     //   "<h1>New Value</h1>"
//     // ); // Update the value of h1 tag
//     // setHtmlContent(updatedHtml);

//     // const modifiedHtml = htmlContent.replace(/<p>/g, '<h1>').replace(/<\/p>/g, '</h1>');
//     // const newValue = modifiedHtml.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags to get plain text value
//     // setHtmlContent(modifiedHtml);

//     // setHtmlContent(modifiedHtml);
//   };

//   const getValue = () => {
//     const value = htmlRef.current.innerHTML;
//     console.log(value); // Log the inner HTML
//   };

//   // useEffect(() => {
//   //   if (contentEditableRef.current.textContent !== props.value) {
//   //     contentEditableRef.current.textContent = props.value;
//   //   }
//   // });

//   const renderColoredText = (text) => {
//     return text.split("\n").map((line, index) => (
//       <p key={index}>
//         {line.split("***").map((part, partIndex) => {
//           if (partIndex % 2 === 0) {
//             return <span key={partIndex}>{part}</span>;
//           } else {
//             return (
//               <span key={partIndex} style={{ color: "red" }}>
//                 {part}
//               </span>
//             );
//           }
//         })}
//       </p>
//     ));
//   };

//   console.log(divHtml, "divText");

//   return (
//     <main className="container">
//       <section className="header">
//         <div>
//           <h1>Demo editor by</h1>
//         </div>
//         <div>
//           <button>Save</button>
//         </div>
//       </section>
//       <button onClick={getValue}>Get Value</button>

//       <section className="compiler">
//         <div style={{ border: "1px solid red" }}>
//           <textarea
//             value={todos}
//             onChange={handleInputChange}
//             placeholder="Enter a todo"
//             style={{ width: "100%", minHeight: "100px" }}
//             id="hi"
//           />
//           {/* <div
//             contentEditable="true"
//             ref={contentEditableRef}
//             onInput={(event) => {
//               onChange(event.target.textContent);
//             }}
//           /> */}
//           {/* <div
//             // className="pink-div"
//             contentEditable={true}
//             onInput={(event) => setDivText(event.target.innerText)}
//             dangerouslySetInnerHTML={{ __html: divText }}
//           >
//             Hello!
//           </div> */}
//           {/* <div
//             // className="pink-div"
//             contentEditable={true}
//             onInput={handleInput}
//             dangerouslySetInnerHTML={{ __html: `<p>${divHtml}</p>` }}
//           /> */}

//           {/* <div
//             ref={htmlRef}
//             contentEditable={true}
//             // onInput={handleInput}
//             onChange={handleInput}
//             dangerouslySetInnerHTML={{ __html: htmlContent }}
//           /> */}
//           {/* <EditableElement>
//             <div style={{ border: "3px solid red", marginTop: "10px" }}>
//               Hi! I'm an editable button
//             </div>
//           </EditableElement> */}
//         </div>
//       </section>
//     </main>
//   );
// };

// const EditableElement = (props) => {
//   const { onChange } = props;
//   const element = useRef();
//   let elements = React.Children.toArray(props.children);

//   if (elements.length > 1) {
//     throw Error("Can't have more than one child");
//   }

//   const onMouseUp = () => {
//     const value = element.current?.value || element.current?.innerText;
//     if (onChange) {
//       onChange(value);
//     }
//   };

//   useEffect(() => {
//     const value = element.current?.value || element.current?.innerText;
//     console.log(value);
//     element.current = value;
//     if (onChange) {
//       onChange(value);
//     }
//     console.log(element, "element111");
//   }, [elements]);

//   const renderColoredText = (text) => {
//     console.log(text, "texttext");
//     return text.split("\n").map((line, index) => (
//       <p key={index}>
//         {line.split("***").map((part, partIndex) => {
//           if (partIndex % 2 === 0) {
//             return (
//               <span style={{ color: "red" }} key={partIndex}>
//                 {part}
//               </span>
//             );
//           } else {
//             return (
//               <span key={partIndex} style={{ color: "red" }}>
//                 {part}
//               </span>
//             );
//           }
//         })}
//       </p>
//     ));
//   };

//   elements = React.cloneElement(elements[0], {
//     contentEditable: true,
//     suppressContentEditableWarning: true,
//     ref: element,
//     onKeyUp: onMouseUp,
//   });
//   console.log(element, elements, "elements");

//   // return renderColoredText(elements);
//   return elements;
// };

// export default EditableElement;



// export const Draft = () => {
//     const editorRef = useRef(null);
  
//     const [value, setValue] = useState(
//       "<p>The quick brown fox jumps over the lazy dog</p>"
//     );
//     const [text, setText] = useState("");
//     const [content, setContent] = useState("");
  
//     const log = (content) => {
//       console.log(content, "ooooo");
  
//       if (editorRef.current) {
//         console.log(editorRef.current.getContent());
//       }
//     };
  
//     const renderColoredText = (text) => {
//       return text.split("\n").map((line, index) => (
//         <>
//           {line.split("#").length === 2 && (
//             <p key={index}>
//               {line.split("#").map((part, partIndex) => {
//                 if (partIndex % 2 === 0) {
//                   return <span key={partIndex}>{part}</span>;
//                 } else {
//                   <>{console.log(line.split("#"), "ooooo12")}</>;
//                   return <h1 key={partIndex}>{part}</h1>;
//                 }
//               })}
//             </p>
//           )}
  
//           {line.split("***").length === 2 && (
//             <p key={index}>
//               {line.split("***").map((part, partIndex) => {
//                 if (partIndex % 2 === 0) {
//                   return <span key={partIndex}>{part}</span>;
//                 } else {
//                   return (
//                     <p>
//                       <u key={partIndex}>{part}</u>
//                     </p>
//                   );
//                 }
//               })}
//             </p>
//           )}
  
//           {line.split("*").length === 2 && (
//             <p key={index}>
//               {line.split("*").map((part, partIndex) => {
//                 if (partIndex % 2 === 0) {
//                   return <span key={partIndex}>{part}</span>;
//                 } else {
//                   return <b key={partIndex}>{part}</b>;
//                 }
//               })}
//             </p>
//           )}
//           {line.split("**").length === 2 && (
//             <p key={index}>
//               {line.split("**").map((part, partIndex) => {
//                 if (partIndex % 2 === 0) {
//                   return <span key={partIndex}>{part}</span>;
//                 } else {
//                   return (
//                     <span style={{ color: "#ff0000" }} key={partIndex}>
//                       {part}
//                     </span>
//                   );
//                 }
//               })}
//             </p>
//           )}
//         </>
//       ));
//     };
  
//     console.log(text, "lllll");
  
//     return (
//       <>
//         <div>{renderColoredText(text)}</div>
//         <Editor
//           // tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
//           // onInit={(evt, editor) => (editorRef.current = editor)}
//           initialValue={<div>{renderColoredText(text)}</div>}
//           onChange={log}
//           apiKey="93cpl11eskuu7h5v6yty7s8njztitv03kzlda2m5ddgbpcv6"
//           // value={<h1>hi</h1>}
//           onInit={(evt, editor) => {
//             setText(editor.getContent({ format: "text" }));
//           }}
//           onEditorChange={(newValue, editor) => {
//             setValue(newValue);
//             setText(editor.getContent({ format: "text" }));
//           }}
//           // dangerouslySetInnerHTML={{ __html: <div>hi</div> }}
//           init={{
//             height: 500,
//             menubar: false,
//             plugins: [
//               "advlist",
//               "autolink",
//               "lists",
//               "link",
//               "image",
//               "charmap",
//               "anchor",
//               "searchreplace",
//               "visualblocks",
//               "code",
//               "fullscreen",
//               "insertdatetime",
//               "media",
//               "table",
//               "preview",
//               "help",
//               "wordcount",
//             ],
//             toolbar: "",
//             // "undo redo | blocks | " +
//             // "bold italic forecolor | alignleft aligncenter " +
//             // "alignright alignjustify | bullist numlist outdent indent | " +
//             // "removeformat | help",
//             content_style:
//               "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//           }}
//         />
//         <Draft1 />
//         {/* <button onClick={log}>Log editor content</button> */}
//       </>
//     );
//   };