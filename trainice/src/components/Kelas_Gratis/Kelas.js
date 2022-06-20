import React from 'react'
import './Kelas.css'
import Footer from './Footer'
import Header from './Header'
import Ok from "../assets/Ok.png";

const Kelas = () => {
  return (
    <>
      <Header />
        <div className='kontenKelas'>
          <div className='manfaat'>
            <h2>Manfaat Pembelajaran</h2>
            <p>Dengan mengikuti program pembelajaran bahasa inggris secara gratis ini kamu<br/> bisa 
              menemukan banyak teman mulai dari pemula hingga expert yang akan<br/> membantu kamu dalam 
              proses belajar bahasa inggris.
            </p>
            <div className='row'>
              <ul className='col center'>
                <li><img src={Ok} alt='logo ceklis'/> Bisa diikuti oleh semua kalangan usia</li>
                <li><img src={Ok} alt='logo ceklis'/> Grup discord untuk memulai percakapan</li>
                <li><img src={Ok} alt='logo ceklis'/> Memilih tema yang cocok sesuai dengan passion kamu</li>
              </ul>
              <ul className='col center'>
                <li><img src={Ok} alt='logo ceklis'/> Bertemu dengan teman level pemula hingga expert</li>
                <li><img src={Ok} alt='logo ceklis'/> Menambah relasi</li>
              </ul>
            </div>
          </div>
          
          <div className='fasilitas'>
            <h2>Fasilitas <span>Pembelajaran</span></h2>  
            <div className='box'>
              <div className='top'>
                <h4>Topik Beragam</h4>
                <p>Anda bisa memilih topik  kesukaan anda</p>
              </div>
              <div className='bottom'>
                <ul>
                  <li><img src={Ok} alt='logo ceklis'/> Musik</li>
                  <li><img src={Ok} alt='logo ceklis'/> Internasional</li>
                  <li><img src={Ok} alt='logo ceklis'/> Budaya Indonesia</li>
                  <li><img src={Ok} alt='logo ceklis'/> Sport</li>
                  <li><img src={Ok} alt='logo ceklis'/> Game</li>
                  <li><img src={Ok} alt='logo ceklis'/> Dan lain-lain</li>
                </ul>
                <button className='btn-tanya' type="button">Tanya Kami</button>
              </div>
            </div>
          </div>

          <div className='siap'>
            <h2>Sudah Siap untuk Menjadi Expert <br/>dalam Bahasa Inggris?</h2>
            <div className='kotak row'>
              <h4 className='col'>Cobalah sekarang juga</h4>
              <div className='grup-btn col'>
              <button className='btn-mulai' type="button">Ayo mulai</button>
              <button className='btn-kontak' type="button">Kontak Kami</button>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Kelas