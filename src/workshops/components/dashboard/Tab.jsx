import React from 'react';
import DashboardTable from './DashboardTable';

export default function Tab(props) {
 
  return (
    <div>
      {/* <h3>{props.tab.title}</h3> */}
      {/* <p>{props.tab.text}</p> */}
      <DashboardTable 
         jobId= '44592'
         partName= 'Schaden an der Hinterachse'
         model= 'VW/T-Roc'
         numberPlate= 'S-EA 1334'
         numberOfParts= '4'
         completion= '15/10/22'
         name= 'Reklamationen'
         title= 'Reklamationen'
      />

    </div>
  );
}
