import React from "react";

import "./Information.css";
export default function Information({ idInformation }) {
  return (
    <div>
      <p className="information" id={idInformation}>
        Pilih chat untuk memulai mengirim pesan
      </p>
    </div>
  );
}
