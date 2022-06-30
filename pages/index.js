import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home(props) {
  return (

    <>
      <div>
        {/*Navbar*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">{props.web.uasjson[0].title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Akhir Navbar */}
        {/* Jumbroton */}
        <section className="jumbotron text-center">
          <img src={props.web.uasjson[1].image} alt="kelvin" width={200} className="rounded-circle img-thumbnail" />
          <h1 className="display-4">{props.web.uasjson[1].name}</h1>
          <p className="lead">{props.web.uasjson[1].title}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity={1} d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,186.7C960,213,1056,235,1152,208C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </section>
        {/* Akhir Jumbroton */}
        {/* About */}
        <section id="about">
          <div className="container">
            <div className="row text-center mb-3">
              <div className="col">
                <h2>{props.web.uasjson[2].Title}</h2>
              </div>
            </div>
            <div className="row justify-content-center fs-5 text-center">
              <div className="col-md-4">
                <p>{props.web.uasjson[2].Deskripsi}</p>
              </div>
              <div className="col-md-4">
                <p>{props.web.uasjson[2].Deskripsi}</p>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e2edff" fillOpacity={1} d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,192C672,171,768,117,864,128C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </section>
        {/* Akhir About */}
        {/* Projects */}
        <section id="projects">
          <div className="container">
            <div className="row text-center mb-3">
              <div className="col">
                <h2>{props.web.uasjson[4].Title}</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <img src={props.web.uasjson[4].list[0].Image} className="card-img-top" alt="projects 1" />
                  <div className="card-body">
                    <p className="card-text">{props.web.uasjson[4].list[0].Deskripsi}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <img src={props.web.uasjson[4].list[1].Image} className="card-img-top" alt="projects 2" />
                  <div className="card-body">
                    <p className="card-text">{props.web.uasjson[4].list[1].Deskripsi}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <img src={props.web.uasjson[4].list[2].Image} className="card-img-top" alt="projects 3" />
                  <div className="card-body">
                    <p className="card-text">{props.web.uasjson[4].list[2].Deskripsi}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <img src={props.web.uasjson[4].list[3].Image} className="card-img-top" alt="projects 4" />
                  <div className="card-body">
                    <p className="card-text">{props.web.uasjson[4].list[4].Deskripsi}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <img src={props.web.uasjson[4].list[4].Image} className="card-img-top" alt="projects 5" />
                  <div className="card-body">
                    <p className="card-text">{props.web.uasjson[4].list[5].Deskripsi}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </section>
        {/* Akhir Projects */}
        {/* Contact Us */}
        <section id="contact">
          <div className="container">
            <div className="row text-center mb-3">
              <div className="col">
                <h2>{props.web.uasjson[3].Judul}</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">{props.web.uasjson[3].InputNumber}</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pesan" className="form-label">{props.web.uasjson[3].InputName}</label>
                    <textarea className="form-control" id="pesan" rows={3} defaultValue={""} />
                  </div>
                  <button type="submit" className="btn btn-primary">{props.web.uasjson[3].Button}</button>
                </form>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fillOpacity={1} d="M0,288L40,288C80,288,160,288,240,272C320,256,400,224,480,213.3C560,203,640,213,720,224C800,235,880,245,960,229.3C1040,213,1120,171,1200,160C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" /></svg>
        </section>
        {/* Akhir Contact Us */}
        {/* Footer */}
        <footer className="bg-primary text-white text-center pb-3">
          <p>{props.web.uasjson[5].Title}<i className="bi bi-heart-fill text-danger" /> <a href={props.web.uasjson[5].LinkBlogs} className="text-white fw-bold">{props.web.uasjson[5].Title2}
          </a></p>
        </footer>
        {/* Akhir Footer */}
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" />
    </>
  )
}

export async function getServerSideProps(context) {
  const localLink = "http://localhost:5000/"
  const onlineLink = "https://portofoliouas.herokuapp.com/"
  const dataResponse = await fetch(onlineLink);
  const dataJson = await dataResponse.json();

  return {
    props: {
      web: dataJson,
    },
  }
}