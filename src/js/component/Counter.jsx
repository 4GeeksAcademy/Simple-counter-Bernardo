import React from "react";

export const Counter = ({seconds}) => {
  return <div className="card-group p-3 mb-2 bg-dark text-white text-center">
  <div className="card bg-dark">
  <div><i class='fa-thin fa-clock-nine fa-9x fa'></i></div>
  </div>
  <div class="card bg-dark far fa-clock">
   <div></div>
  </div>
  <div className="card bg-dark">
   <div>0</div>
  </div>
  <div className="card bg-dark">
   <div>0</div>
  </div>
  <div className="card bg-dark">
   <div>0</div>
  </div>
  <div className="card bg-dark">
   <div>0</div>
  </div>
  <div className="card bg-dark">
   <div>{seconds}</div>
  </div>
</div>
}
