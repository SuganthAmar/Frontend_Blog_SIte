import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="./src/pages/write/1065762.jpg" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus fa-beat-fade"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Enter Title." className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFromGroup">
                <textarea placeholder="Tell us your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
