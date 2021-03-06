import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather} className='weatherInput' >
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />

        <div className="svg">
            <button className="form-btn button" style={{ margin: '0 auto' }}>
                {/* <a  className=""> */}
                <svg>
                    <rect height="40" width="130"
                        fill="transparent" />
                </svg>
                <span>Get Weather</span>
                {/* </a> */}
            </button>
        </div>

    </form>
);

export default Form;