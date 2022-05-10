function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://wallpaperaccess.com/full/14358.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://lookw.ru/19/1933/1638926547-1001-www.lookw.ru.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://wallpaperforu.com/wp-content/uploads/2020/04/1012707-scaled.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider