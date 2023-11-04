import React from 'react'

const Contant = () => {
  return (
      <>
          <section className='bg-contant py-5'>
              <div className="mycontainer max-w-1030 py-lg-4">
                  <h3 className='mb-0 ff_nenu color_white fs_lg text-center fw_bold'>Contact Us</h3>
                  <p className='mb-0 mb-lg-3 ff_primary fs_sm fw_regular text-center color_white'>Have a question or want to contribute? Reach out to us.</p>
                  <form className='pt-4'>
                      <div className="d-flex flex-column flex-sm-row gap-4 gap-md-5">
                          <div className='d-flex flex-column w-100'>
                              <label htmlFor="name" className='color_white mb-0 fs_sm fw_regular pt-4'>First Name</label>
                              <input type="name" className='color_white mb-0 fs_sm fw_regular bg-transparent' />
                          </div>
                          <div className='d-flex flex-column w-100'>
                              <label htmlFor="name" className='color_white mb-0 fs_sm fw_regular pt-4'>Last Name</label>
                              <input type="name" className='color_white mb-0 fs_sm fw_regular bg-transparent' />
                          </div>
                      </div>
                      <div className="d-flex flex-column flex-sm-row gap-4 gap-md-5 pt-3">
                          <div className='d-flex flex-column w-100'>
                              <label htmlFor="Email" className='color_white mb-0 fs_sm fw_regular pt-4'>Email</label>
                              <input type="email" className='color_white mb-0 fs_sm fw_regular bg-transparent' />
                          </div>
                          <div className='d-flex flex-column w-100'>
                              <label htmlFor="name" className='color_white mb-0 fs_sm fw_regular pt-4'>Phone Number</label>
                              <input type="number" className='color_white mb-0 fs_sm fw_regular bg-transparent' />
                          </div>
                      </div>
                      <div className="d-flex pt-3">
                          <div className='d-flex flex-column w-100'>
                              <label htmlFor="Email" className='color_white mb-0 fs_sm fw_regular pt-4'>Massage</label>
                              <textarea type="text" className='color_white mb-0 fs_sm fw_regular bg-transparent' />
                          </div>
                      </div>
                      <div className="mt-5 pt-lg-4 d-flex justify-content-center">
                          <button className="outline-btn border-0 fs_3sm fw_medium ff_primary color_white">SUBMIT'</button>
                      </div>
                  </form>
              </div>
          </section>
    </>
  )
}

export default Contant