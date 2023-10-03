import React from 'react';

const Loading = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-4">
          <div className="card p-2 rounded">
            <div className="card-img-top bg-secondary" style={{ height: '270px' }}></div>
            <div className="card-body d-flex flex-column gap-4 py-3">
              <div className="bg-light font-weight-bold" style={{ height: '30px' }}></div>
              <div className="bg-light font-weight-bold" style={{ height: '30px' }}></div>
              <div className="bg-light font-weight-bold" style={{ height: '16px' }}></div>
              <div className="bg-light font-weight-bold" style={{ height: '16px' }}></div>
              <div className="bg-light font-weight-bold" style={{ height: '16px' }}></div>
              <div className="bg-light font-weight-bold" style={{ height: '16px' }}></div>
              <div className="bg-light font-weight-bold" style={{ height: '16px' }}></div>
              <div className="bg-light font-weight-bold" style={{ height: '16px' }}></div>
              <span className="bg-light text-white self-start py-0.5 px-3 rounded-md text-sm" style={{ height: '24px', width: '140px' }}></span>
              <div className="bg-light" style={{ height: '20px', width: '220px' }}></div>
              <strong className="mb-4 bg-light" style={{ height: '24px', width: '100px' }}></strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
