export default function Home(){
    return(
        <>
            <div id="main">
                <div id="container">
                    <div id="text-field">
                        <textarea id="text" placeholder="Write here..."></textarea>
                        <button id="b">Go</button>
                    </div>
                    <div id="upload">
                        <input id="file" type="file"/>
                        <button id="bb">Upload</button>
                    </div>
                </div>
            </div>
        </>
    )
}