import React, { Component } from 'react'

export default function NewItem(props) {



    let { title, description, imageUrl, newsUrl, date, author, source } = props;

    return (
        <div className='my-3'>
            <div className="card"  >
                {/* <span style={{ zIndex: "1" }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {source}

                </span> */}
                <img src={imageUrl === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_UUEA5JF3jFjoK5Y3eKLtelH23EcIL2wz0pNDXOwNHw&s" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description} ...</p>
                    <p className="card-text"><small className="text-muted">Last updated on {new Date(date).toLocaleString()} by {!author ? 'unknown' : author} </small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">read more</a>
                </div>
            </div>
        </div>
    )
}

