import React from "react";
import bgimage from "../../assets/images/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg";
import { Form } from "react-hook-form";
import { Link } from "react-router-dom";
const Registration = () => {

const handleRegister=()=>{
    useEffect(() => {
        axios.get('https://house-hunter-server-bfw8u70n9-nhhasib.vercel.app/registration')
            .then(data => setHousesData(data.data))
        .catch(error=>console.log(error))
    }, [])
}

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
                <h1 className="text-4xl font-bold text-center">Please Register</h1>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="URL"
                  className="input input-bordered"
                 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Role</span>
                </label>
                
      <select>
  <option value="someOption">House owner</option>
  <option value="otherOption">House Renters</option>
</select>
              </div>
              <div className="form-control mt-6">
                <button onClick={()=>handleRegister()} className="btn bg-blue-500 hover:bg-blue-600 text-white text-lg">Register</button>
              </div>
            </form>
            <p className="text-center py-2">Already have account? <Link className="underline text-blue-700" to="/login">Login here!</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
