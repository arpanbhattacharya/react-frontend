export default function Home(){
    return(
        <>
            <div id="main">
                <div id="container">
                    <div id="text-field">
                        <textarea id="text"></textarea>
                        <button>Go</button>
                    </div>
                    <div id="upload">
                        <input type="file"/>
                        <button>Upload</button>
                    </div>
                </div>
            </div>
        </>
    )
}