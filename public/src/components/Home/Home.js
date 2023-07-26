import React from 'react';
import RoiUpdatebox from '../roiUpdatebox/RoiUpdate';
import UpdateTable from '../updateTable/updateTable';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import core_contract from "../../contracts/core_calls";
const Home = () => {
  //const selectedAccount = useSelector((s) => s.substrate.selectedAccount);

  useEffect(() => {
    //console.log(selectedAccount);
    //core_contract.getOverRates(selectedAccount);
  }, []);

  return (
    <>
     <div className='main--content-box'>
        <div className='section--titlebox'>
          <h2 className='section--subtitle'>  <span className='colorText'>A0BET is on Aleph Zero TestNet</span></h2>
        </div>

        <RoiUpdatebox />
        <UpdateTable />
      </div>
    </>
  )
}

export default Home
