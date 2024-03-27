function Page(){
    return(
        <div className="viewing m-t-5rem">
            <div className="wrapper grid grid-60-auto">
                <div className="main">
                    <div className="image">
                        <div className="current"></div>
                        <div className="thumbs"></div>
                    </div>
                    <div className="details">
                        <h3>Title</h3>
                        <div className="more inline-flex items-centers gap-x-1 text-primary">
                            <span>location</span>
                            <span>rooms</span>
                            <span>color</span>
                            <span>category</span>
                        </div>
                    </div>
                    <div className="other">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque doloribus explicabo iste maxime nihil? Cupiditate ea molestiae nemo nihil ratione repudiandae tempore!</p>
                    </div>
                    <div className="view-end">
                        <h3 className="fs-2 text-primary">contact us for more</h3>
                        <div className="action">
                            <button className="button">Call</button>
                        </div>
                    </div>
                </div>
                <aside></aside>
            </div>
        </div>
    )
}
export default Page