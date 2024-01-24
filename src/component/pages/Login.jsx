import React from "react";
import bgimage from "../../assets/images/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg";
import { Form } from "react-hook-form";
import { Link } from "react-router-dom";
const login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200" style={{  
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="hero-content w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body pb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 hover:bg-blue-600 text-white text-lg">Login</button>
              </div>
            </form>
            <p className="text-center py-2">New to this website? <Link className="underline text-blue-700" to="/register">Register here!</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
